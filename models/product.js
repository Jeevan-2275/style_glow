// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

// Export the model
module.exports = mongoose.model('Product', productSchema); // ✅ Correct