// ** Models
const { AlertModel, MonitoringAlertSeverityLookup } = require('../models');

// ** Helpers
const logger = require('../helpers/logger');

class AlertService {
  constructor() {
    logger.info('AlertService');
  }

  async getAlertCountViaAlerts() {
    return [{ message: 'List via alerts' }];
  }

  async getAlertCountViaLookup() {
    return [{ message: 'List via lookup' }];
  }
}

module.exports = AlertService;
