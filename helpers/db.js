require('dotenv').config();

const mongoose = require('mongoose');

// ** Utils
const logger = require('./logger');

// ** Local constants
const { MONGO_URL } = process.env;

// ** Logging options for the driver
const options = {
  logger: logger.debug,
  loggerLevel: 'debug',
};

// ** With options
mongoose.set('debug', false);
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL, options);

const db = mongoose.connection;

db.on('error', (error) => {
  logger.error('Connection error:', error);
});

db.once('open', () => {
  logger.info(`Database is connected:`, MONGO_URL);
});

db.once('close', () => {
  logger.info('Database connection closed');
});

module.exports = db;
