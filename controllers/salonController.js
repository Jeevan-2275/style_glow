const Salon = require('../models/Salon');

// Add a new salon
const addSalon = async (req, res) => {
  const { name, location, services } = req.body;

  try {
    const salon = new Salon({ name, location, services, owner: req.user.userId });
    await salon.save();
    res.status(201).json(salon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all salons
const getSalons = async (req, res) => {
  try {
    const salons = await Salon.find();
    res.json(salons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single salon by ID
const getSalonById = async (req, res) => {
  try {
    const salon = await Salon.findById(req.params.id);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found' });
    }
    res.json(salon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addSalon, getSalons, getSalonById };