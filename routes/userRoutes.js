const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get user details
router.get('/me', authMiddleware, getUser);

// Update user details
router.put('/me', authMiddleware, updateUser);

module.exports = router;