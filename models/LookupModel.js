const mongoose = require('mongoose');

// ** Local constants
const { Schema, model } = mongoose;

// ** Monitoring alert severity schema
const MASeveritySchema = new Schema(
  {
    _id: { type: Number },
    type: { type: String, default: 'MONITORING_ALERT_SEVERITY' },
    // ===== =====
    label: {
      type: String,
      default: 'Low',
      enum: ['Low', 'Medium', 'High', 'Immediate'],
    },
  },
  {
    timestamps: true,
    collection: 'LookupMaster',
  }
);

// ** Monitoring alert schema
const MASchema = new Schema(
  {
    _id: { type: Number },
    type: { type: String, default: 'MONITORING_ALERT' },
    // ===== =====
    severity: { type: Number, ref: 'MonitoringAlertSeverityLookup' },
  },
  {
    timestamps: true,
    collection: 'LookupMaster',
  }
);

const MALookup = model('MonitoringAlertLookup', MASchema);
const MASeverityLookup = model('MonitoringAlertSeverityLookup', MASeveritySchema);

module.exports = {
  MonitoringAlertLookup: MALookup,
  MonitoringAlertSeverityLookup: MASeverityLookup,
};
