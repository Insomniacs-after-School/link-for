const express = require('express');

const router = express.Router();
const loginHandler = require('../controllers/auth/loginHandler');

router.post('/', loginHandler);

module.exports = router;
