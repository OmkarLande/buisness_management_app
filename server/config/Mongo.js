const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/buisness-management', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log('MongoDB connection error', err);
        process.exit(1);
    })
}