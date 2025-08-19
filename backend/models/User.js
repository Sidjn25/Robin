const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  password: String // Store hashed password in real app!
});
module.exports = mongoose.model('User', userSchema);
