const API_BASE = '/api';

const COLLECTION_NAME = {
  AlertMaster: 'AlertMaster',
  BusinessMaster: 'BusinessMaster',
  LookupMaster: 'LookupMaster',
  UserMaster: 'UserMaster',
};

const LOOKUP_TYPE = {
  MONITORING_ALERT: 'MONITORING_ALERT',
  MONITORING_ALERT_SEVERITY: 'MONITORING_ALERT_SEVERITY',
};

const MODEL_NAME = {
  AlertModel: 'AlertModel',
  BusinessModel: 'BusinessModel',
  MonitoringAlertModel: 'MonitoringAlertModel',
  MonitoringAlertSeverityModel: 'MonitoringAlertSeverityModel',
  UserModel: 'UserModel',
};

const PORT = 8089;

module.exports = {
  API_BASE,
  COLLECTION_NAME,
  LOOKUP_TYPE,
  MODEL_NAME,
  PORT,
};
