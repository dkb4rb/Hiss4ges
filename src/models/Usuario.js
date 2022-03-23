const { DataTypes } = require("sequelize");
const db = require("../DB/database");

const Users = db.define("Users", {
  name: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  date_birth: {
    type: DataTypes.DATE,
  },
  user_mail: {
    type: DataTypes.STRING,
    unique: true,
  },
  user_pass: {
    type: DataTypes.STRING,
  },
  passphrase: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  url_img: {
    type: DataTypes.STRING,
  },
  friend: {
    type: DataTypes.STRING,
  },
});

module.exports = Users;
