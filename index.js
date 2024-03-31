const express = require('express');

const logger = require('./helpers/_logger');
const { API_BASE, PORT } = require('./scripts/constants');

// ** Routes
const userRoutes = require('./routes/UserRoutes');

const webApp = express();

webApp.use(API_BASE + '/user', userRoutes);

webApp.listen(PORT, () => {
  logger.info('App is listening at port', PORT);
});
