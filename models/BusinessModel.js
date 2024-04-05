const mongoose = require('mongoose');

// ** Constants
const { COLLECTION_NAME, MODEL_NAME } = require('../scripts/constants');

// ** Local constants
const { Schema, model } = mongoose;

const BusinessSchema = new Schema(
  {
    _id: { type: Number },
    businessName: { type: String },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME.BusinessMaster,
  }
);

module.exports = model(MODEL_NAME.BusinessModel, BusinessSchema);
