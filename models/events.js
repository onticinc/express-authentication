'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  events.init({
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.TEXT,
    eventLink: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventCost: DataTypes.INTEGER,
    eventPicture: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};