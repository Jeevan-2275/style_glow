// # Database connection

// config/env.js
require('dotenv').config(); // Load environment variables from .env file

const env = {
  PORT: process.env.PORT || 5000, // Server port
  MONGO_URI: process.env.MONGO_URI, // MongoDB connection string
  JWT_SECRET: process.env.JWT_SECRET, // Secret key for JWT
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY, // Stripe secret key
  EMAIL_USER: process.env.EMAIL_USER, // Email service username
  EMAIL_PASS: process.env.EMAIL_PASS, // Email service password
};

// Validate required environment variables
const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'STRIPE_SECRET_KEY'];
for (const envVar of requiredEnvVars) {
  if (!env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

module.exports = env;