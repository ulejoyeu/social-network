import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        default: '/images/profilePic.png'
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

// UserSchema.post('save', function (doc, next) {
    
//     next();
// });

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const isSame = await bcrypt.compare(password, user.password);
    return isSame;
}

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;