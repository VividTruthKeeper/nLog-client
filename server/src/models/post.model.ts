"use strict";
import { Model } from "sequelize";
import { PostAttributes } from "../types/postTypes";

module.exports = (sequelize: any, DataTypes: any) => {
  class Post extends Model<PostAttributes> implements PostAttributes {
    id!: number;
    title!: string;
    content!: string;
    date!: number;

    static associate(models: any) {
      Post.belongsTo(models.User);
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
