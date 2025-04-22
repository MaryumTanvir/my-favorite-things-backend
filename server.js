const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/favorites', favoritesRoutes);

// Routes
app.use('/api/data', dataRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/onepageapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('MongoDB connection failed:', err));
