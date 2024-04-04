const mongoose = require('mongoose');

// ** Local constants
const { Schema, model } = mongoose;

const AlertSchema = new Schema(
  {
    _id: { type: Number },
    message: { type: String, default: '' },
    type: { type: Number, ref: 'MonitoringAlertLookup' },
  },
  {
    timestamps: true,
    collection: 'AlertMaster',
  }
);

module.exports = model('AlertMaster', AlertSchema);
