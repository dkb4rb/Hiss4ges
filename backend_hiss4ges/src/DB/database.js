const { Sequelize } = require("sequelize");

const database = "db_Hiss4g3s";
const db_user = "root";
const db_pass = "H1ss4g3sdb2022";

const sql_conn = new Sequelize(database, db_user, db_pass, {
  host: "db_hiss4ge",
  dialect: "mysql",
});

module.exports = sql_conn;
