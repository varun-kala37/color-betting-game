const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize configuration
const User = require('./user'); // Assuming User model file path
const Game = require('./game'); // Assuming Game model file path

const Bet = sequelize.define('Bet', {
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  color: {
    type: DataTypes.ENUM('red', 'green', 'blue', 'yellow'),
    allowNull: true,
  },
  size: {
    type: DataTypes.ENUM('BIG', 'SMALL'),
    allowNull: true,
  },
  betAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Bet.belongsTo(User); // Bet belongs to a User
Bet.belongsTo(Game); // Bet belongs to a Game

module.exports = Bet;
