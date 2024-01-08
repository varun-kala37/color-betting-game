const User = require('../model/user'); // Import User model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Assuming you're using bcrypt for password hashing

const UserController = {
  async register(req, res) {
    try {
      const { username, password } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        password: hashedPassword,
        // Add other user attributes as needed
      });

      // Create a JWT token for the registered user
      const token = jwt.sign({ userId: newUser.id }, 'your_secret_key_here', { expiresIn: '1h' });

      return res.status(201).json({ message: 'User registered successfully', user: newUser, token });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Create a JWT token for the logged-in user
      const token = jwt.sign({ userId: user.id }, 'your_secret_key_here', { expiresIn: '1h' });

      return res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },
  // Other user-related controller functions
};

module.exports = UserController;
