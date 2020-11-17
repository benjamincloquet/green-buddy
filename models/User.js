const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: 'CartProduct' }],
});

module.exports = mongoose.model('User', userSchema, 'users');
