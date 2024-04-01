// ** Models
const { BusinessModel, UserModel } = require('../models');

// ** Data
const BUSINESSES = require('../data/business.json');
const USERS = require('../data/user.json');

// ** Helpers
const logger = require('../helpers/logger');

class SetupService {
  constructor() {
    logger.info('SetupService');
  }

  async setupDB() {
    // ** Delete data from DB
    const deleteResponse = await Promise.all([
      BusinessModel.deleteMany({}),
      UserModel.deleteMany({}),
    ]);
    // ** Add data to DB
    const addResponse = await Promise.all([
      BusinessModel.insertMany(BUSINESSES),
      UserModel.insertMany(USERS),
    ]);
    return [deleteResponse, addResponse];
  }
}

module.exports = SetupService;
