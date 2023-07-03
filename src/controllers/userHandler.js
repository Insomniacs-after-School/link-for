const response = require('../helpers/response');
const { getUserEmailByDataId } = require('../service/user_service');
const { updateDataById, getDataById } = require('../service/datas_service');

const getDataHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = await getUserEmailByDataId(id);

    const result = await getDataById(id);
    response(200, 'success', { data: { userInfo, result } }, res);
  } catch (error) {
    console.log(error);
    response(500, 'failed', { message: 'server error!' }, res);
  }
};

const updateDataHandler = (req, res) => {
  try {
    const { id } = req.params;
    const {
      image, name, link, bio,
    } = req.body;

    const data = {
      id, image, name, link, bio,
    };

    const result = updateDataById(data);
    console.log(result);
    response(200, 'success', { message: 'Data berhasil di perbarui' }, res);
  } catch (error) {
    console.log(error);
    response(500, 'failed', { message: 'server error!' }, res);
  }
};

const logout = (req, res) => {
  res.clearCookie('LINKFOR-AUTH', { domain: 'localhost', path: '/' }).status(204).end();
};

module.exports = { getDataHandler, updateDataHandler, logout };
