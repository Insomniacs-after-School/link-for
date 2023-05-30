const { Datas } = require('../model/User');

const getDataById = async (id) => {
  try {
    const data = await Datas.findOne({ where: { id } });

    return {
      image: data.dataValues.image,
      name: data.dataValues.name,
      link: data.dataValues.link,
      bio: data.dataValues.bio,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addFirstData = async () => {
  const image = '';
  const name = '';
  const link = [];
  const bio = '';

  const data = await Datas.create({
    image,
    name,
    link,
    bio,
  });

  return {
    id: data.dataValues.id,
  };
};

const updateDataById = async (requestbody) => {
  const {
    id, image, name, link, bio,
  } = requestbody;

  const data = await Datas.update({
    image,
    name,
    link,
    bio,
  }, { where: { id } });

  return data;
};

module.exports = { getDataById, addFirstData, updateDataById };
