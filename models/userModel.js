import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    about: {
        type: String
    },
    skills: [],
    isMailVerified: {
        type: Boolean,
        default: false
    }
});

//collection creation
const User = mongoose.model('User', UserSchema);

export default User;