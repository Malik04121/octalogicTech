const { Sequelize } = require('sequelize');
const config = require('./config');

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
});

module.exports = sequelize;
