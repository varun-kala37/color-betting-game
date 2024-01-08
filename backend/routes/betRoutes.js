const express = require('express');
const router = express.Router();
const BetController = require('../controller/betController');

router.post('/place-bet', BetController.placeBet);
router.get('/bets/:userId', BetController.getUserBets);

module.exports = router;
