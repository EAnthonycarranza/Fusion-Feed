const express = require('express');
const router = express.Router();

// Sample Home Route
router.get('/', (req, res) => {
    res.send('Welcome to the Home Page of Social Media App');
});

module.exports = router;
