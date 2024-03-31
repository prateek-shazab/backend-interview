const mongoose = require('mongoose');

// ** Local constants
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    businessId: { type: ObjectId, ref: 'BusinessMaster' },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true, collection: 'UserMaster' }
);

module.exports = model('UserMaster', UserSchema);
