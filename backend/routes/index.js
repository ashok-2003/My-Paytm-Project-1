const express = require('express');
const userRoutes = require('./user');
const accountRoutes = require('./account');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/accounts', accountRoutes);

module.exports = router;
