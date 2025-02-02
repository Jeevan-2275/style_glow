const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const env = require('../config/env');

// Register a new user
const register = async (name, email, password, role) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();
  return { message: 'User registered successfully' };
};

// Login a user
const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');
  
  const token = jwt.sign({ userId: user._id, role: user.role }, env.JWT_SECRET, {
    expiresIn: '1h'
  });
  return { token };
};

module.exports = { register, login };