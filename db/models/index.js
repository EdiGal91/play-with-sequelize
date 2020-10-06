const UserModel = require("./user.model");
const { sequelize } = require("../index");

const User = UserModel(sequelize);

module.exports = {
  User,
};
