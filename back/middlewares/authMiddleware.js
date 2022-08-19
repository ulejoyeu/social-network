import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'SECRET_TOKEN', (err, decodedToken) => {
            if (err) {
                res.status(403).json({ error: 'Invalid token' });
            } else {
                next();
            }
        });
    } else {
        res.status(403).json({ error: 'User must be logged in' });
    } 
};

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(req.cookies);
    if(token) {
        jwt.verify(token, 'SECRET_TOKEN', async (err, decodedToken) => {
            if (err) {
                res.status(403).json({ error: 'Invalid token' });
                res.locals.user = null;
                next();
            } else {
                const user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

export { requireAuth, checkUser };