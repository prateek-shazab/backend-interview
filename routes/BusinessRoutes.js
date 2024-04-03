const express = require('express');
const router = express.Router();

const { BusinessController } = require('../controller');

router
  .route('/list-via-businesses')
  .get(BusinessController.getBusinessListViaBusinesses);

router.route('/list-via-users').get(BusinessController.getBusinessListViaUsers);

module.exports = router;
