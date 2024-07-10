const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    name: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
    status: { type: String, enum: ['planning', 'in-progress', 'completed', 'on-hold'], default: 'planning' },
    assignedEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Project', ProjectSchema);