const mongoose = require('mongoose');

// ** Local constants
const { Schema, model } = mongoose;

const BusinessSchema = new Schema(
  {
    businessName: { type: String },
  },
  {
    timestamps: true,
    collection: 'BusinessMaster',
  }
);

module.exports = model('BusinessMaster', BusinessSchema);
