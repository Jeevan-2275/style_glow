const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Add a new product (only for salon owners)
router.post('/', authMiddleware, roleMiddleware('salonOwner'), addProduct);

// Get all products
router.get('/', getProducts);

module.exports = router;