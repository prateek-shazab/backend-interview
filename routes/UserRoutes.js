const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

router.route('/list').get(UserController.getUserList);

module.exports = router;
