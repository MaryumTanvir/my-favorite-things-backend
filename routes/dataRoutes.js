const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Make sure this matches your file name

// POST: Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Simple validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = new User({ name, email });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error: error.message });
  }
});

// GET: Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

module.exports = router;
