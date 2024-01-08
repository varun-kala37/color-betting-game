const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize configuration

const Game = sequelize.define('Game', {
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[1, 3, 5, 10]], // Ensure the duration is one of these values
    },
  },
  // Other game attributes like startTime, endTime, etc.
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Game;
