const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  // TODO: hash password, check if user exists
  const user = new User({ email, password });
  await user.save();
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token, email });
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token, email });
});

module.exports = router;
