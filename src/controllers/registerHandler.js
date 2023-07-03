const response = require('../helpers/response');
const { createUser } = require('../service/user_service');
const { random, authentication } = require('../helpers/utils');
const { addFirstData } = require('../service/datas_service');
const { User } = require('../model/User');

const registerHandler = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    const result = !email ? 'email' : !username ? 'username' : 'password';
    return response(
      400,
      'failed',
      { message: `${result} belum dimasukkan!` },
      res,
    );
  }

  if (await User.findOne({ where: { username } })) {
    return response(409, 'failed', { message: 'username sudah dipakai' }, res);
  }

  if (await User.findOne({ where: { email } })) {
    return response(409, 'failed', { message: 'email sudah dipakai' }, res);
  }

  const salt = random();
  const dataId = await addFirstData();
  const data = await createUser(
    email,
    username,
    {
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    },
    dataId.id,
  );

  return response(200, 'success', { message: 'register ready', data }, res);
};

module.exports = registerHandler;
