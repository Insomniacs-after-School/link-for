const express = require('express');

const router = express.Router();
const isAuthenticated = require('../middlewares/index');
const {
  getDataHandler, updateDataHandler, logout,
} = require('../controllers/userHandler');

router.delete('/:id', isAuthenticated, logout);
router.get('/:id', isAuthenticated, getDataHandler);
router.put('/:id', isAuthenticated, updateDataHandler);

module.exports = router;
