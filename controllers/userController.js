const User = require('../models/User');

// Get user details
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update user details
const updateUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { name, email },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { getUser, updateUser };