const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum: ['income', 'expense']
    },
    amount: Number,
    category: String,
    description: String,
    relatedOrder: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);