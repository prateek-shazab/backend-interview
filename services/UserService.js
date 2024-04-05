// ** Models
const { UserModel } = require('../models');

// ** Helpers
const logger = require('../helpers/logger');

const USER_LIST_LIMIT = 20;
const USER_LIST_POP_DEF = [{ path: 'businessId' }];

class UserService {
  constructor() {
    logger.info('UserService');
  }

  async getUserList() {
    return UserModel.find({})
      .populate(USER_LIST_POP_DEF)
      .limit(USER_LIST_LIMIT)
      .sort({ lastName: 1 });
  }
}

module.exports = UserService;
