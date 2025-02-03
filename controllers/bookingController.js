const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { salonId, date, time } = req.body;
    
    const booking = new Booking({
      user: req.user.userId,
      salon: salonId,
      date,
      time
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error creating booking', 
      error: err.message 
    });
  }
};

// Get all bookings for the logged-in user
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId })
      .populate('salon', 'name location services');
      
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error fetching bookings', 
      error: err.message 
    });
  }
};

module.exports = { createBooking, getUserBookings };