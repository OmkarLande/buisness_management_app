const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    name: { type: String, required: true },
    email: String,
    phone: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);