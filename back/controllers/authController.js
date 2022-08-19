import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const MAX_AGE = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'SECRET_TOKEN', {
        expiresIn: MAX_AGE
    });
};

const userInfo = async (req, res) => {
    const user = await User.findById(res.locals.user._id);
    res.status(200).json({ user });
};

const registerUser = async (req, res) => {
    const { 
        username, 
        password
    } = req.body;

    if (username && password) {
        const user = await User.findOne({ username });

        if(user == null) {
            const createdUser = await User.create(req.body);
            if (createdUser !== null) {
                return res.status(201).json({'msg': 'User has been created successfully'});
            }
        } else {
            res.status(400).json({ error: 'Username already in use' });
        }

    } else {
        res.status(400).json({ error: "Missing parameters" })
    }
}

const updateUser = async (req, res) => {
    const { username } = req.body;

    if (username) {
        const user = await User.findOne({ username });
        if (user == null) {
            res.status(404).json({ error: "User not found" });
        } else {
            console.log([
                user._id,
                res.locals.user._id
            ]);
            if(user._id.equals(res.locals.user._id)) {
                User.updateOne(
                    {_id: user._id}, 
                    req.body,
                    (err, result) => {
                        if(err) {
                            res.send(err);
                        } else {
                            res.status(200).json({ msg: "User has been updated successfully"});
                        }
                    }
                )
            } else {
                res.status(403).json({ err: 'You tried to modify another user' });
            }
        }
    }   
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if(username && password) {
        const user = await User.findOne({ username });
        if (user == null) {
            return res.status(404).json({ error: "User not found" });
        }
        if (user.isValidPassword(password)) {
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000 });
            return res.status(200).json({ user });
        }

        return res.status(403).json({ error: "Invalid password" });
    }

    return res.status(400).json({ error: 'No username or password specified' });    
};

const logoutUser = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({ msg: 'User logged out' });
};

export { registerUser, updateUser, loginUser, logoutUser, userInfo };