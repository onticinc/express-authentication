'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  games.init({
    gameName: DataTypes.STRING,
    gameModule: DataTypes.STRING,
    gameManufacture: DataTypes.STRING,
    gameSerialNumber: DataTypes.STRING,
    gameNotes: DataTypes.TEXT,
    gamePicture: DataTypes.STRING,
    gameHighScore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'games',
  });
  return games;
};