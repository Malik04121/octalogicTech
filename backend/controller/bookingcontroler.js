
const { Op } = require('sequelize');
const Booking = require('../models/booking');


// Submit a booking
exports.submitBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  try {
    // Check for overlapping bookings
    const overlappingBookings = await Booking.findAll({
      where: {
        vehicleId,
        startDate: {
          [Op.lt]: new Date(endDate),
        },
        endDate: {
          [Op.gt]: new Date(startDate),
        },
      },
    });

    if (overlappingBookings.length > 0) {
      return res.status(400).json({ message: 'Vehicle is already booked for the specified dates.' });
    }

    // Create the booking
    const booking = await Booking.create({
      firstName,
      lastName,
      vehicleId,
      startDate,
      endDate,
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
