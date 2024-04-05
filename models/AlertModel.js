const mongoose = require('mongoose');

const { COLLECTION_NAME, MODEL_NAME } = require('../scripts/constants');

// ** Local constants
const { Schema, model } = mongoose;

const AlertSchema = new Schema(
  {
    _id: { type: Number },
    message: { type: String, default: '' },
    type: { type: Number, ref: MODEL_NAME.MonitoringAlertModel },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME.AlertMaster,
  }
);

module.exports = model(MODEL_NAME.AlertModel, AlertSchema);
