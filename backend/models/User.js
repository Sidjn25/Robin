const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // Store hashed password in real app!
});
module.exports = mongoose.model('User', userSchema);
