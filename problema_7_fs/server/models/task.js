'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      get() {
        // convert to yyyy-MM-dd format
        const date = new Date(this.getDataValue('date'));
        return date.toISOString().slice(0, 10);
      },
      set(value) {
        // convert to date format
        const date = new Date(value);
        this.setDataValue('date', date);
      }

    },
    priority: DataTypes.ENUM(1,2,3),
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};