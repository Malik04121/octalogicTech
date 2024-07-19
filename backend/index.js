const express = require('express');
const app = express();
require('dotenv').config();
const vehicleRoutes = require('./route/vehicleRouter');
const bookingRoutes = require('./route/bookingRoute');
const sequelize = require('./config/sequelize');


// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', vehicleRoutes);
app.use('/api', bookingRoutes);

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'Welcome to Vehicle booking' });
  });

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Start Server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
