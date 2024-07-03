const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    startDate: Date,
    endDate: Date,
    budget: Number,
    targetAudience: String,
    channels: [String],
    status: {
        type: String,
        enum: ['planned', 'active', 'completed', 'cancelled'],
        default: 'planned'
    }
});

module.exports = mongoose.model('Campaign', CampaignSchema);