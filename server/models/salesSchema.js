const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'InventoryItem' },
        quantity: Number,
        price: Number
    }],
    totalAmount: Number,
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' }
});

module.exports = mongoose.model('Sale', SaleSchema);