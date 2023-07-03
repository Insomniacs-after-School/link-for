const express = require('express');

const router = express.Router();
const registerHandler = require('../controllers/auth/registerHandler');

router.post('/', registerHandler);

module.exports = router;
