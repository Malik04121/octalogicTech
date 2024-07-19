const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequalize');


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
