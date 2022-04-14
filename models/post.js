"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post.belongsTO(models.users, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "casecade",
      });
    }
  }
  post.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      contents: DataTypes.STRING,
      imgInfo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
