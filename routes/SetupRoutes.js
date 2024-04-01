const express = require('express');
const router = express.Router();

const { SetupController } = require('../controller');

router.route('/db').get(SetupController.setupDB);

module.exports = router;
