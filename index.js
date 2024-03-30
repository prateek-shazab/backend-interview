const express = require('express');

const { API_BASE, PORT } = require('./scripts/constants');

// ** Routes
const userRoutes = require('./routes/UserRoutes');

const webApp = express();

webApp.use(API_BASE + '/user', userRoutes);

webApp.listen(PORT, () => {
  console.log('App is listening at port', PORT);
});
