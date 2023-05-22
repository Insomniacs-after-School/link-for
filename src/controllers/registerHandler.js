const response = require('../helpers/response');
const { createUser } = require('../service/user_service');
const { random, authentication } = require('../helpers/utils');

const registerHandler = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    const result = !email ? 'email' : !username ? 'username' : 'password';
    response(400, 'failed', { message: `${result} belum dimasukkan!` }, res);
  } else {
    const salt = random();
    const data = await createUser(email, username, {
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    // res.redirect('/login');
    response(200, 'success', { message: 'register ready', data }, res);
  }
};

module.exports = registerHandler;
