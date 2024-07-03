const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    category: String,
    price: {
        type: Number,
        required: true
    },
    cost: Number,
    stockQuantity: {
        type: Number,
        default: 0
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    reorderPoint: Number
});

module.exports = mongoose.model('Product', ProductSchema);