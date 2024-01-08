const Game=require("../model/game");

const createGame = async (req, res) => {
    try {
      const { duration } = req.body; // Duration provided in the request body
  
      // Calculate startTime and endTime based on the duration
      const currentTime = new Date();
      const startTime = currentTime;
      const endTime = new Date(currentTime.getTime() + duration * 60000); // Assuming duration is in minutes
  
      // Create a new game with startTime, endTime, and duration
      const newGame = await Game.create({ startTime, endTime, duration });
  
      // Return the newly created game in the response
      return res.status(201).json(newGame);
    } catch (error) {
      console.error('Error creating game:', error); // Log the error for debugging
  
      // Return a 500 status code along with an error message
      return res.status(500).json({ error: 'Failed to create a new game' });
    }
  };
  


const getGames = async (req, res) => {
  try {
    // Fetch all available games
    const games = await Game.findAll();

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve games' });
  }
};


const getGameById = async (req, res) => {
  try {
    const { id } = req.params; // ID of the game requested

    // Find the game by its ID
    const game = await Game.findByPk(id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve the game' });
  }
};






module.exports = { getGames ,createGame,getGameById};
