const Game = require('../model/game');
const Bet = require('../model/bet');

const declareResult = async (req, res) => {
    try {
      const { gameId } = req.params; // Game ID to declare results
  
      // Retrieve the game details
      const game = await Game.findByPk(gameId);
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
  
      // Generate random values for the result
      const options = ['green', 'red', 'violet']; // Colors
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Numbers
      const sizes = ['SMALL', 'BIG']; // Sizes
  
      const winningNumber = numbers[Math.floor(Math.random() * numbers.length)];
      const winningColor = options[Math.floor(Math.random() * options.length)];
      const winningSize = sizes[Math.floor(Math.random() * sizes.length)];
  
      // Find all bets for the specified game
      const gameBets = await Bet.findAll({ where: { GameId: gameId } });
  
      // Determine winners based on bets placed
      const winners = gameBets.filter((bet) => {
        return (
          bet.number === winningNumber ||
          bet.color === winningColor ||
          bet.size === winningSize
        );
      });
  
      // Update the game status to 'completed' after declaring results
      await game.update({ status: 'completed' });
  
      return res.status(200).json({
        message: 'Game results declared successfully',
        winningNumber,
        winningColor,
        winningSize,
        winners,
      });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to declare game results' });
    }
  };
  



const getWinnersAndUpdateBalances = async (req, res) => {
    try {
      const { gameId } = req.params; // Game ID to retrieve winners
  
      // Find all bets for the specified game
      const gameBets = await Bet.findAll({ where: { gameId } });
  
      // Get the winning options from the request body or any other source
      const { winningNumber, winningColor, winningSize } = req.body;
  
      // Logic to determine winners based on game results
      const winners = gameBets.filter((bet) => {
        return (
          bet.number === winningNumber ||
          bet.color === winningColor ||
          bet.size === winningSize
        );
      });
  
      // Update user balances based on the winnings
      const winnersInfo = [];
      for (const winner of winners) {
        const user = await User.findByPk(winner.userId);
        if (user) {
          let winnings = 0;
          if (winner.number === winningNumber) {
            winnings = winner.betAmount * winningNumber;
          } else if (winner.color === winningColor || winner.size === winningSize) {
            winnings = winner.betAmount * 2;
          }
          user.walletBalance += winnings;
          await user.save();
          winnersInfo.push({ userId: user.id, username: user.username, winnings });
        }
      }
  
      return res.status(200).json({ message: 'Winners declared and balances updated', winners: winnersInfo });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update balances for winners' });
    }
  };
  
  module.exports = { getWinnersAndUpdateBalances };
  

module.exports = { declareResult ,getWinnersAndUpdateBalances};
