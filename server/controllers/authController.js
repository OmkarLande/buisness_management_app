const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password, role, firstName, lastName, phone, position, department } = req.body;

        //no empty fields
        if (!username || !email || !password || !role || !firstName || !lastName || !phone || !position || !department) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        //user already exists
        let user = await User.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //username unique
        user = await User.findOne({
            username
        });
        if (user) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //new user
        user = new User({
            username,
            email,
            password: hashedPassword,
            role,
            firstName,
            lastName,
            phone,
            hireDate: new Date(),
            position,
            department
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //no empty fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        //user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //token payload
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        //token options
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' });

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days
        });
        res.json({ message: 'Logged in successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { firstName, lastName, phone, position, department } = req.body;

        //no empty fields
        if (!firstName || !lastName || !phone || !position || !department) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        //find user 
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        //update user
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.phone = phone || user.phone;
        user.position = position || user.position;
        user.department = department || user.department;

        await user.save();

        res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};