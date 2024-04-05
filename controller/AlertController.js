const { AlertService } = require('../services');

const alertServiceCRUD = new AlertService();

const getAlertCountViaAlerts = async (_, res) => {
  const alertCount = await alertServiceCRUD.getAlertCountViaAlerts();
  return res.send(alertCount);
};

const getAlertCountViaLookup = async (_, res) => {
  const alertCount = await alertServiceCRUD.getAlertCountViaLookup();
  return res.send(alertCount);
};

module.exports = {
  getAlertCountViaAlerts,
  getAlertCountViaLookup,
};
