const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    startDate: Date,
    endDate: Date,
    status: {
        type: String,
        enum: ['planning', 'in-progress', 'completed', 'on-hold'],
        default: 'planning'
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    tasks: [{
        description: String,
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        dueDate: Date,
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending'
        }
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);