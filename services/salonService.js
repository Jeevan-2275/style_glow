const Salon = require('../models/Salon');

// Add a new salon
const addSalon = async (name, location, services, ownerId) => {
  const salon = new Salon({ name, location, services, owner: ownerId });
  await salon.save();
  return salon;
};

// Get nearby salons (simplified example)
const getNearbySalons = async (userLocation) => {
  // For production, use geolocation queries
  const salons = await Salon.find().populate('owner', 'name');
  return salons;
};

module.exports = { addSalon, getNearbySalons };