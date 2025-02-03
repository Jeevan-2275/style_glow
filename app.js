const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const env = require('./config/env');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const salonRoutes = require('./routes/salonRoutes');
const productRoutes = require('./routes/productRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/salons', salonRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bookings', bookingRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Salon Website Backend');
});

module.exports = app;