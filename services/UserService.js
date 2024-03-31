const logger = require('../helpers/logger');

class UserService {
  constructor() {
    logger.info('UserService');
  }

  async getUserList() {
    return [{ message: 'List of users' }];
  }
}

module.exports = UserService;
