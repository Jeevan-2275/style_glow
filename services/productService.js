const Product = require('../models/Product');

// Add a new product
const addProduct = async (name, price, description) => {
  const product = new Product({ name, price, description });
  await product.save();
  return product;
};

// Get all products
const getProducts = async () => {
  const products = await Product.find();
  return products;
};

module.exports = { addProduct, getProducts };