const express = require('express');
const router = express.Router();
const vehicleController = require('../controller/vehicleController');

// Route to get vehicle types based on wheels (assuming `wheels` is a query parameter or part of the route)
router.get('/vehicleType/:category', vehicleController.getVehicleTypes);

// Route to get vehicles by type ID
router.get('/vehicles/:typeId', vehicleController.getVehicles);

module.exports = router;

