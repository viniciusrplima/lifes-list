const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, trim: true},
  photoUrl: {type: String},
  photoKey: {type: String},
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100
  },
  password: {type: String, required: true, minlength: 3, maxlength: 100},
  createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
