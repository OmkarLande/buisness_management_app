const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    amount: { type: Number, required: true },
    category: String,
    description: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Finance', FinanceSchema);