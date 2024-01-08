// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

// Define user endpoints
router.post('/register', UserController.register);
router.post('/login', UserController.login);
// Add other user-related endpoints

module.exports = router;
