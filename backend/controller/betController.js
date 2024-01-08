const User = require('../model/user');
const  Game = require('../model/game');
const  Bet  = require('../model/bet'); // Import your Sequelize models

const placeBet = async (req, res) => {
  try {
    const { userId, gameId, number, color, size, betAmount } = req.body;

    // Fetch the user and game instances by their IDs
    const user = await User.findByPk(userId);
    const game = await Game.findByPk(gameId);

    if (!user || !game) {
      return res.status(404).json({ error: 'User or Game not found' });
    }

    // Create a new bet associated with the user and game
    const newBet = await Bet.create({
      number,
      color,
      size,
      betAmount,
      UserId: user.id, // Assign the user's ID to the bet
      GameId: game.id, // Assign the game's ID to the bet
    });

    return res.status(201).json({ message: 'Bet placed successfully', bet: newBet });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to place the bet' });
  }
};




const getUserBets = async (req, res) => {
  try {
    const { userId } = req.params; // User ID for fetching their bets

    // Find all bets placed by the specified user
    const userBets = await Bet.findAll({ where: { userId } });

    return res.status(200).json(userBets);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve user bets' });
  }
};


module.exports = { placeBet,getUserBets  };


