const express = require('express');
const profileHandler = require('../controllers/profileHandler');

const router = express.Router();

router.get('/:username', profileHandler);

module.exports = router;
