const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

// Important: Use the exact collection names
const Food = mongoose.model('Food', favoritesSchema, 'favourite-foods');
const Movie = mongoose.model('Movie', favoritesSchema, 'favourite-movies');
const Flower = mongoose.model('Flower', favoritesSchema, 'favourite-flowers');

router.get('/foods', async (req, res) => {
  const items = await Food.find();
  res.json(items);
});

router.get('/movies', async (req, res) => {
  const items = await Movie.find();
  res.json(items);
});

router.get('/flowers', async (req, res) => {
  const items = await Flower.find();
  res.json(items);
});

module.exports = router;
