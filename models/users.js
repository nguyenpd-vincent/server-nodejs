'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
    }
  };
  users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: {
    type: DataTypes.ENUM("admin", "customer"),
  },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};