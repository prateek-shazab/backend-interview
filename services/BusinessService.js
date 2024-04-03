// ** Models
const { BusinessModel } = require('../models');

// ** Helpers
const logger = require('../helpers/logger');

class BusinessService {
  constructor() {
    logger.info('BusinessService');
  }

  // ** Aggregate query via BusinessModel
  async getBusinessListViaBusinesses() {
    return [{ message: 'List via businesses' }];
  }

  // ** Aggregate query via UserModel
  async getBusinessListViaUsers() {
    return [{ message: 'List via users' }];
  }
}

module.exports = BusinessService;
