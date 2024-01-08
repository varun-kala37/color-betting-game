const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const BetRoutes = require('./routes/betRoutes');
// Body parser middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use('/bet', BetRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
