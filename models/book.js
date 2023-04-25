'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsTo(models.reader, {
        foreignKey: "reader_id",
        as: "reader"
      })
    }
  }
  book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};