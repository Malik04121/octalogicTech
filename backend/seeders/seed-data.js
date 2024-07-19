'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Hatchback', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'SUV', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sedan', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cruiser', category: 'Bike', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sport', category: 'Bike', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Vehicles', [
      { name: 'Honda Civic', typeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toyota RAV4', typeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ford Focus', typeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Harley Davidson', typeId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ninja', typeId: 5, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  },
};
