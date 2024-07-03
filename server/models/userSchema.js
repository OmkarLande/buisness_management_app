const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'owner', 'employee'],
        default: 'employee'
    },
    firstName: String,
    lastName: String,
    phone: String,
    hireDate: Date,
    position: String,
    department: String,
    salary: Number,
});

module.exports = mongoose.model('User', UserSchema);