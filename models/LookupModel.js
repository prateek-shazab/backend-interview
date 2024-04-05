const mongoose = require('mongoose');

// ** Constants
const { COLLECTION_NAME, LOOKUP_TYPE, MODEL_NAME } = require('../scripts/constants');

// ** Local constants
const { Schema, model } = mongoose;

// ** Monitoring alert severity schema
const MASeveritySchema = new Schema(
  {
    _id: { type: Number },
    type: { type: String, default: LOOKUP_TYPE.MONITORING_ALERT_SEVERITY },
    // ===== =====
    label: {
      type: String,
      default: 'Low',
      enum: ['Low', 'Medium', 'High', 'Immediate'],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME.LookupMaster,
  }
);

// ** Monitoring alert schema
const MASchema = new Schema(
  {
    _id: { type: Number },
    type: { type: String, default: LOOKUP_TYPE.MONITORING_ALERT },
    // ===== =====
    severity: { type: Number, ref: 'MonitoringAlertSeverityModel' },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME.LookupMaster,
  }
);

const MAModel = model(MODEL_NAME.MonitoringAlertModel, MASchema);
const MASeverityModel = model(MODEL_NAME.MonitoringAlertSeverityModel, MASeveritySchema);

module.exports = {
  MonitoringAlertModel: MAModel,
  MonitoringAlertSeverityModel: MASeverityModel,
};
