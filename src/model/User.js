const { DataTypes } = require('sequelize');

const { sequelize } = require('../db/connection');

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.CHAR(36),
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
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
  salt: {
    type: DataTypes.STRING,
  },
  sessionToken: {
    type: DataTypes.STRING,
  },
  dataId: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
});

// the defined model is the class itself
if (User === sequelize.models.User) {
  User.sync();
  console.log('tabel user berhasil dibuat');
}

const Datas = sequelize.define('Datas', {
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
});

// User.belongsTo(Datas);
// Datas.hasOne(User);

// the defined model is the class itself
if (Datas === sequelize.models.Datas) {
  Datas.sync();
  console.log('tabel data berhasil dibuat');
}

// sequelize.sync({ force: true }) // force: true akan menghapus tabel lama dan membuat yang baru
//   .then(() => {
//     console.log('Tabel berhasil dibuat');
//   })
//   .catch((error) => {
//     console.error('Terjadi kesalahan:', error);
//   });

module.exports = { User, Datas };
