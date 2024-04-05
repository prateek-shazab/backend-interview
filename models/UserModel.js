const mongoose = require('mongoose');

// ** Constants
const { COLLECTION_NAME, MODEL_NAME } = require('../scripts/constants');

// ** Local constants
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    _id: { type: Number },
    businessId: { type: Number, ref: 'BusinessMaster' },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true, collection: COLLECTION_NAME.UserMaster }
);

module.exports = model(MODEL_NAME.UserModel, UserSchema);
