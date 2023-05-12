const response = require('../helpers/response');

const loginHandler = (req, res) => {
  response(200, 'success', { message: 'login ready' }, res);
};

module.exports = loginHandler;