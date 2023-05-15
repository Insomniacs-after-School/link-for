const { DataTypes, Model } = require('sequelize');

const { sequelize } = require('../db/connection');

class User extends Model { }

User.init({
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
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
});

// the defined model is the class itself
if (User === sequelize.models.User) {
  User.sync();
  console.log('tabel user berhasil dibuat');
}

module.exports = User;
