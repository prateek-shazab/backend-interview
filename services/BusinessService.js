// ** Models
const { BusinessModel, UserModel } = require('../models');

// ** Helpers
const logger = require('../helpers/logger');

class BusinessService {
  constructor() {
    logger.info('BusinessService');
  }

  async getBusinessListViaBusinesses() {
    return [{ message: 'List via businesses' }];
  }

  async getBusinessListViaUsers() {
    return [{ message: 'List via users' }];
  }
}

module.exports = BusinessService;
