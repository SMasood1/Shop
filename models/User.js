const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: { type: DataTypes.STRING, require: true },
  password: { type: DataTypes.STRING, require: true },
});

module.exports = User;
