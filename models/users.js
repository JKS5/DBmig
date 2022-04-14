"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.post, {
        foreignKey: "user_id",
        sourceKey: "id",
        onDelete: "cascade",
      });
    }
  }
  users.init(
    {
      userId: DataTypes.STRING,
      userName: DataTypes.STRING,
      mobile: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
