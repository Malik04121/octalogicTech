const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');



const Vehicle = sequelize.define('Vehicle', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'VehicleTypes',
      key: 'id',
    },
  },
});

module.exports = Vehicle;
