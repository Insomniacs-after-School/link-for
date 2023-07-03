const response = require('../helpers/response');
const { getDataByUsername } = require('../service/user_service');

const profileHandler = async (req, res) => {
  try {
    const { username } = req.params;
    const data = await getDataByUsername(username);

    response(200, 'success', { data }, res);
  } catch (error) {
    response(500, 'failde', { message: 'server error!' }, res);
  }
};

module.exports = profileHandler;
