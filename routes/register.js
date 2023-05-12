const express = require('express');

const router = express.Router();
const registerHandler = require('../controllers/registerHandler');

router.post('/', registerHandler);

module.exports = router;
