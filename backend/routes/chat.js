const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Send message to chat (connect to Azure OpenAI)
router.post('/', async (req, res) => {
  const { message, lang } = req.body;
  // TODO: connect to Azure OpenAI and return response
  const reply = "Sample AI reply in " + lang;
  // Save to chat history
  const chat = new Chat({ message, reply, lang });
  await chat.save();
  res.json({ reply });
});

// Get chat history for a user
router.get('/history', async (req, res) => {
  // TODO: filter by user
  const history = await Chat.find().sort({ createdAt: -1 }).limit(50);
  res.json({ history });
});

module.exports = router;
