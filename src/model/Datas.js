const { DataTypes } = require('sequelize');

const { sequelize } = require('../db/connection');

// image name, link (array of object), bio
// {
//   “status”: “success”,
//   “data”: {
//       “image”: string,
//       “name”: string,
//       “link”: [ { “name”: string, “url”: string },
//                   { “name”: string, “url”: string },
//                   { “name”: string, “url”: string },
//                   { “name”: string, “url”: string }
//                 ],
//       “bio”: string,
//   }
// }

const Datas = sequelize.define(
  'Datas',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.CHAR(36),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      defaultValue: new Date().toDateString(),
    },
    updatedAt: {
      type: DataTypes.STRING,
      defaultValue: new Date().toDateString(),
    },
  },
);

// // the defined model is the class itself
if (Datas === sequelize.models.Datas) {
  Datas.sync();
  console.log('tabel data berhasil dibuat');
}

module.exports = Datas;
