const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("apparel_store", "root", "1234QWer", {
  dialect: "mysql",
  host: process.env.DB_HOST
});


module.exports = sequelize;
