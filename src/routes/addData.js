const express = require('express');
const response = require('../helpers/response');
const isAuthenticated = require('../middlewares/index');

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  response(200, 'success', { message: 'auth ok' }, res);
});

module.exports = router;
