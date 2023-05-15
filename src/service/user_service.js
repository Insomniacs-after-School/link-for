const User = require('../model/User');

const createUser = async (email, username, authentication) => {
  try {
    const { password, salt } = authentication.authentication;

    const user = await User.create({
      email,
      username,
      password,
      salt,
    });

    return {
      id: user.dataValues.id,
      username: user.dataValues.username,
    };
  } catch (error) {
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

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return {
      email: user.dataValues.email,
      password: user.dataValues.password,
      salt: user.dataValues.salt,
      id: user.dataValues.id,
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
};
