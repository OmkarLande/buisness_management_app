const mongoose = require('mongoose');

const MarketingCampaignSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    name: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
    budget: Number,
    status: { type: String, enum: ['planned', 'active', 'completed'], default: 'planned' }
});

module.exports = mongoose.model('MarketingCampaign', MarketingCampaignSchema);