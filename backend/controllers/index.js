const router = require('express').Router();

// Home routes
router.use('/', require('./homeRoutes'));

// API routes
router.use('/api', require('./api'));

module.exports = router;
