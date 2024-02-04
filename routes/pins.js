const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/hehe")
const pinSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Create the Pin model
module.exports = mongoose.model('Pin', pinSchema);

// Export the Pin model
