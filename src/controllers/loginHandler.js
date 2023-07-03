const response = require('../helpers/response');
const { getUserByEmail, setSessionToken } = require('../service/user_service');
const { random, authentication } = require('../helpers/utils');

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  // cheking email is exist
  if (!email || !password) {
    const result = !email ? 'email' : 'username';
    response(400, 'failed', { message: `${result} belum dimasukkan!` }, res);
  } else {
    const userIsExist = await getUserByEmail(email);
    // email validation
    if (userIsExist.email === email) {
      const authSalt = userIsExist.salt;
      const authPassword = userIsExist.password;

      // password validation
      const matchHash = authentication(authSalt, password);

      if (authPassword === matchHash) {
        // generate session Token

        const salt = random();

        const TOKEN = await setSessionToken(userIsExist.id, authentication(salt, userIsExist.id));

        res.cookie('LINKFOR-AUTH', TOKEN, { domain: 'localhost', path: '/' });
        response(200, 'success', { message: 'login ready', data: { id: userIsExist.id, dataId: userIsExist.dataId, auth: TOKEN } }, res);
      } else {
        response(401, 'failed', { message: 'username atau password tidak ditemukan!' }, res);
      }
    } else {
      response(401, 'failed', { message: 'username atau password tidak ditemukan!' }, res);
    }
  }
};

module.exports = loginHandler;
