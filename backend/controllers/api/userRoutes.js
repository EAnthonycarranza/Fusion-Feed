const express = require('express');
const router = express.Router();

const User = require('../../models/user');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username
        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
