const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');



const VehicleType = sequelize.define('VehicleTypes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = VehicleType;
