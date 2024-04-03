require('./helpers/db');

const express = require('express');

const logger = require('./helpers/logger');
const { API_BASE, PORT } = require('./scripts/constants');

// ** Routes
const { BusinessRoutes, SetupRoutes, UserRoutes } = require('./routes');

const webApp = express();

webApp.use(API_BASE + '/business', BusinessRoutes);
webApp.use(API_BASE + '/setup', SetupRoutes);
webApp.use(API_BASE + '/user', UserRoutes);

webApp.listen(PORT, () => {
  logger.info('App is listening at port', PORT);
});
