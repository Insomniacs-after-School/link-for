const response = require('../helpers/response');
const { getUserByEmail } = require('../service/user_service');

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  // cheking email is exist
  if (!email || !password) {
    const result = !email ? 'email' : 'username';
    response(400, 'failed', { message: `${result} belum dimasukkan!` }, res);
  } else {
    const userIsExist = await getUserByEmail(email);
    if (userIsExist.email === email) {
      // password validation
      const match = userIsExist.password === password;
      if (match) {
        response(200, 'success', { message: 'login ready' }, res);
      } else {
        response(401, 'failed', { message: 'username atau password tidak ditemukan!' }, res);
      }
    } else {
      response(401, 'failed', { message: 'username atau password tidak ditemukan!' }, res);
    }
  }
};

module.exports = loginHandler;
