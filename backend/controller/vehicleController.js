const Vehicle = require("../models/vehicle");
const VehicleType = require("../models/vehicletype");


// Get vehicle types based on wheels (assuming `wheels` is used for filtering)
exports.getVehicleTypes = async (req, res) => {
  try {
    const { category } = req.params; 
    const vehicleTypes = await VehicleType.findAll({
      where: {
        category: category == 2 ? "Bike" : "Car", 
      },
    });
    if (vehicleTypes.length === 0) {
      return res.status(404).json({ message: 'No vehicle types found for the specified wheels' });
    }

    res.status(200).json({
      message: 'Vehicle types retrieved successfully',
      vehicleTypes,
    });
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get vehicles by type ID
exports.getVehicles = async (req, res) => {
  try {
    const { typeId } = req.params;
    const vehicles = await Vehicle.findAll({ where: { typeId } });
    if (vehicles.length === 0) {
      return res.status(404).json({ message: 'No vehicles found for the specified type ID' });
    }

    res.status(200).json({
      message: 'Vehicles retrieved successfully',
      vehicles,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
