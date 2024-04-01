const logger = require('../helpers/logger');
const { UserModel } = require('../models');

class UserService {
  constructor() {
    logger.info('UserService');
  }

  async getUserList() {
    return UserModel.find({});
  }
}

module.exports = UserService;
