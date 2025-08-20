// Simple Chat model (replace with DB code as needed)
class Chat {
  constructor(user, message, response, timestamp = new Date()) {
    this.user = user;
    this.message = message;
    this.response = response;
    this.timestamp = timestamp;
  }
}

module.exports = Chat;
