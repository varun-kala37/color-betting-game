// gameRoutes.js

const express = require('express');
const router = express.Router();
const GameController = require('../controller/gameController');
const Result=require("../controller/result")
const BetController=require("../controller/betController")

router.post('/create-game', GameController.createGame);
router.get('/games',GameController.getGames);
router.get('/games/:id',GameController.getGameById);

router.post('/declare-result/:gameId', Result.declareResult);
router.get('/winners/:gameId', Result.getWinnersAndUpdateBalances);
module.exports = router;

