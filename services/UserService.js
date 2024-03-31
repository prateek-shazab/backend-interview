const logger = require('../helpers/_logger');

class UserService {
  constructor() {
    logger.info('UserService');
  }

  async getUserList() {
    return [{ message: 'List of users' }];
  }
}

module.exports = UserService;
