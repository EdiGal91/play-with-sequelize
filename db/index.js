const { Sequelize } = require("sequelize");
const userModel = require("./models/user.model");
const sequelize = new Sequelize(process.env.DB_URL);

exports.sequelize = sequelize;

exports.connect = async function () {
  console.log("connecting...");
  try {
    await sequelize.authenticate();
    sequelize.sync({ force: true });
    userModel(sequelize);
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable connect to the database:", error);
    return false;
  }
};
