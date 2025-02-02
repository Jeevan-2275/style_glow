const User = require('../models/User');

// Get user details
const getUser = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};

// Update user details
const updateUser = async (userId, name, email) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { name, email },
    { new: true }
  ).select('-password');
  return user;
};

module.exports = { getUser, updateUser };