const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


const Users =  mongoose.model('User', UserSchema);

module.exports = Users;