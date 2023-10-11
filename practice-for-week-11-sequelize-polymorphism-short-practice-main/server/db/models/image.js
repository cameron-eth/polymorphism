'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      this.belongsTo(models.BlogPost, {
        foreignKey: 'imageableId',
        constraints: false
      })

      this.belongsTo(models.UserProfile, {
        foreignKey: 'imageableId',
        constraints: false
      })
    }
  };
  Image.init({
    url:{
      type: DataTypes.STRING,
      allowNull: false
    },
    imageableType:{
      type: DataTypes.ENUM('UserProfile', 'BlogPost'),
    } ,
    imageableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};