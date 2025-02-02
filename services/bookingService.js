const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (userId, salonId, date, time) => {
  const booking = new Booking({ user: userId, salon: salonId, date, time });
  await booking.save();
  return booking;
};

// Get user bookings
const getUserBookings = async (userId) => {
  const bookings = await Booking.find({ user: userId })
    .populate('salon', 'name location');
  return bookings;
};

module.exports = { createBooking, getUserBookings };