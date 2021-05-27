'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsTo(models.Users, { foreignKey: 'userId' });
      // define association here
    }
  };
  Events.init({
    uuid: DataTypes.UUID,
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    startDate: DataTypes.STRING,
    startTime: DataTypes.TIME,
    endDate: DataTypes.STRING,
    endTime: DataTypes.TIME,
    timeZone: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};