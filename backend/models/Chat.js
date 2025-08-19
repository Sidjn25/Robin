const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
  message: String,
  reply: String,
  lang: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Chat', chatSchema);
