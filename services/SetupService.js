// ** Models
const {
  AlertModel,
  BusinessModel,
  MonitoringAlertModel,
  MonitoringAlertSeverityModel,
  UserModel,
} = require('../models');

// ** Data
const ALERTS = require('../data/alert.json');
const BUSINESSES = require('../data/business.json');
const MONITORING_ALERTS = require('../data/monitoring-alert.json');
const MONITORING_ALERT_SEVERITY = require('../data/monitoring-alert-severity.json');
const USERS = require('../data/user.json');

// ** Helpers
const logger = require('../helpers/logger');

const CONFIG = [
  {
    model: AlertModel,
    data: ALERTS,
  },
  {
    model: BusinessModel,
    data: BUSINESSES,
  },
  {
    model: MonitoringAlertModel,
    data: MONITORING_ALERTS,
    filter: { type: 'MONITORING_ALERT' },
  },
  {
    model: MonitoringAlertSeverityModel,
    data: MONITORING_ALERT_SEVERITY,
    filter: { type: 'MONITORING_ALERT_SEVERITY' },
  },
  {
    model: UserModel,
    data: USERS,
  },
];

class SetupService {
  constructor() {
    logger.info('SetupService');
  }

  async setupDB(query = {}) {
    const shouldFindAllData = Boolean(query.find);

    // ** Delete data from DB
    const deleteResponse = await Promise.all(
      shouldFindAllData
        ? []
        : CONFIG.map(async (useConfig) => {
            const { filter = {}, model } = useConfig;
            const res = await model.deleteMany(filter);
            return {
              [model.modelName]: res,
            };
          })
    );
    // ** Add data to DB
    const addOrFindResponse = await Promise.all(
      shouldFindAllData
        ? CONFIG.map(async (useConfig) => {
            const { filter = {}, model } = useConfig;
            const res = await model.find(filter);
            return {
              [model.modelName]: res,
              findCount: res.length,
            };
          })
        : CONFIG.map(async (useConfig) => {
            const { data, model } = useConfig;
            const res = await model.insertMany(data);
            return {
              [model.modelName]: res,
              insertCount: res.length,
            };
          })
    );
    return [deleteResponse, addOrFindResponse];
  }
}

module.exports = SetupService;
