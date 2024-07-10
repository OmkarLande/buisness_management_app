const mongoose = require('mongoose');


const InventoryItemSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    name: { type: String, required: true },
    description: String,
    quantity: { type: Number, default: 0 },
    unit: String,
    price: Number,
    supplier: String,
    reorderPoint: Number
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);