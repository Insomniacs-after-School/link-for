const { merge } = require('lodash');
const response = require('../helpers/response');
const { getUSerBySessionToken } = require('../service/user_service');

const isAuthenticated = async (req, res, next) => {
  try {
    const sessionToken = req.cookies['LINKFOR-AUTH'];

    if (!sessionToken) {
      return response(403, 'failed', { message: 'silahkan login!' }, res);
    }

    const existingUser = await getUSerBySessionToken(sessionToken);

    if (!existingUser) {
      return response(403, 'failed', { message: 'sesi berakhir!' }, res);
    }
    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    response(500, 'failed', { message: 'server error!' }, res);
  }
};

module.exports = isAuthenticated;
