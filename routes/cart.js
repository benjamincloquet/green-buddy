const authenticated = require('./middleware/authenticated');
const productExists = require('./middleware/productExists');
const connectedToDatabase = require('./middleware/connectedToDatabase');

const CartProduct = require('../models/CartProduct');

module.exports = (router) => {
  router.get('/cart', authenticated, (req, res) => {
    res.send(req.user.cart);
  });

  router.post('/cart', connectedToDatabase, authenticated, productExists, (req, res) => {
    CartProduct.find({ userId: req.user.id }, (err, cartProducts) => {
      if (err) {
        res.status(503).json({ error: "Couldn't add products to the cart" });
      } else {
        const { productId, quantity } = req.body;
        const existingCartProduct = cartProducts.find((cartProduct) => cartProduct.productId.equals(productId));
        if (existingCartProduct) {
          existingCartProduct.quantity += quantity;
          existingCartProduct.save().then((savedCartProduct) => {
            res.status(201).json(savedCartProduct);
          });
        } else {
          new CartProduct({ ...req.body, userId: req.user.id }).save().then((newCartProduct) => {
            res.status(201).json(newCartProduct);
          });
        }
      }
    });
  });
};
