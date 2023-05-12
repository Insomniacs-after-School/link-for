const response = require('../helpers/response');

const registerHandler = (req, res) => {
  const { email, username, password } = req.body;
  response(200, 'success', { message: 'register ready' }, res);
};

module.exports = registerHandler;
