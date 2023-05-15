const response = require('../helpers/response');
const { createUser } = require('../service/user_service');

const registerHandler = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    const result = !email ? 'email' : !username ? 'username' : 'password';
    response(400, 'failed', { message: `${result} belum dimasukkan!` }, res);
  } else {
    const data = await createUser(email, username, password);
    response(200, 'success', { message: 'register ready', data }, res);
  }
};

module.exports = registerHandler;
