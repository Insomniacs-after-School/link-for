const response = require('../helpers/response');

const loginHandler = (req, res) => {
  const { email, password } = req.body;
  response(200, 'success', { message: 'login ready' }, res);
};

module.exports = loginHandler;
