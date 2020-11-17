const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartProductSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('CartProduct', cartProductSchema, 'cartProducts');
