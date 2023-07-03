const { User } = require('../model/User');
const { getDataById } = require('./datas_service');

const createUser = async (email, username, authentication, dataId) => {
  try {
    const { password, salt } = authentication.authentication;

    const user = await User.create({
      email,
      username,
      password,
      salt,
      dataId,
    });

    return {
      id: user.dataValues.id,
      username: user.dataValues.username,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    return error;
  }
};

const getDataByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    const { dataId } = user.dataValues;
    const result = await getDataById(dataId);
    return result;
  } catch (error) {
    return error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return {
      email: user.dataValues.email,
      password: user.dataValues.password,
      salt: user.dataValues.salt,
      id: user.dataValues.id,
      dataId: user.dataValues.dataId,
    };
  } catch (error) {
    return error;
  }
};

const getUserEmailByDataId = async (dataId) => {
  try {
    const user = await User.findOne({ where: { dataId } });
    return {
      username: user.dataValues.username,
      email: user.dataValues.email,
    };
  } catch (error) {
    return error;
  }
};

const getUserBySessionToken = async (sessionToken) => {
  try {
    const user = await User.findOne({ where: { sessionToken } });
    if (!user) {
      return false;
    }
    return {
      username: user.dataValues.username,
      email: user.dataValues.email,
      authentication: {
        password: user.dataValues.password,
        salt: user.dataValues.salt,
        sessionToken: user.dataValues.sessionToken,
      },
    };
  } catch (error) {
    return error;
  }
};

const updateUserById = async (id, email, username, password) => {
  try {
    const user = await User.update({
      email,
      username,
      password,
    }, {
      where: { id },
    });

    return user;
  } catch (error) {
    return error;
  }
};

const setSessionToken = async (id, sessionToken) => {
  try {
    const token = await User.update({ sessionToken }, { where: { id } });

    if (!token) {
      return new Error();
    }

    const result = await User.findOne({ where: { id } });
    return result.dataValues.sessionToken;
  } catch (error) {
    return error;
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await User.destroy({ where: { id } });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  setSessionToken,
  getUserBySessionToken,
  getUserEmailByDataId,
  getDataByUsername,
};
