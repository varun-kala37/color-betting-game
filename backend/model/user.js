// User model
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Other user attributes like password, wallet balance, etc.
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  walletBalance: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

// Define associations
User.associate = (models) => {
  User.hasMany(models.Bet, { foreignKey: 'UserId' });
};

module.exports = User;
