const response = require('../helpers/response');

const registerHandler = (req, res) => { 
  response(200, 'success', { message: 'register ready' }, res);
};

module.exports = registerHandler;