const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

exports.authenticate = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;

        //is user exists
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

exports.authorizeOwner = (req, res, next) => {
    if (req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied. Owner rights required.' });
    }
    next();
};

exports.authorizeEmployee = (req, res, next) => {
    if (req.user.role !== 'employee') {
        return res.status(403).json({ message: 'Access denied. Employee rights required.' });
    }
    next();
};

exports.authorizeBusiness = (req, res, next) => {
    if (req.user.business.toString() !== req.params.id) {
        return res.status(403).json({ message: 'Access denied. Not authorized for this business.' });
    }
    next();
};