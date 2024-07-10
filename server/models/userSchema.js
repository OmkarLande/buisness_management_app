const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['owner', 'employee'], required: true },
    firstName: String,
    lastName: String,
    phone: String,
    hireDate: Date,
    position: String,
    department: String,
    salary: Number,
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' }
});

module.exports = mongoose.model('User', UserSchema);