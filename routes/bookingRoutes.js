const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create booking (protected route)
router.post('/', authMiddleware, createBooking);

// Get user bookings (protected route)
router.get('/me', authMiddleware, getUserBookings);

module.exports = router;