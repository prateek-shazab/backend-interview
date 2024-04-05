const express = require('express');
const router = express.Router();

const { AlertController } = require('../controller');

router.route('/count-via-alerts').get(AlertController.getAlertCountViaAlerts);

router.route('/count-via-lookup').get(AlertController.getAlertCountViaLookup);

module.exports = router;
