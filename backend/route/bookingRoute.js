const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingcontroler');

// Route to submit a booking
router.post('/bookings', bookingController.submitBooking);

module.exports = router;
