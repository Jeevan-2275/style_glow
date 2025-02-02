const express = require('express');
const { addSalon, getSalons } = require('../controllers/salonController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Add a new salon (protected route, only for salon owners)
router.post('/', authMiddleware, roleMiddleware('salonOwner'), addSalon);

// Get all salons (public route)
router.get('/', getSalons);

module.exports = router;