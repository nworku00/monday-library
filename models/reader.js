"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class reader extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            reader.hasMany(models.book, { //this is stating that the reader can have many books
                foreignKey: "reader_id", //using the id section of the "reader" table
                as: "books"
            })

        }
    }
    reader.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "reader",
        }
    );
    return reader;
};
