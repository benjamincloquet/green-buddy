const authenticated = require('./middleware/authenticated');
const productExists = require('./middleware/productExists');

const CartProduct = require('../models/CartProduct');

const createCartProduct = async (req) => {
  const quantity = Math.max(req.body.quantity, 0);
  return new CartProduct({ ...req.body, quantity, userId: req.user.id }).save();
};

const getCartProduct = async (req) => {
  const cartProducts = await CartProduct.find({ userId: req.user.id });
  const { productId } = req.body;
  return cartProducts.find((cartProduct) => cartProduct.productId.equals(productId));
};

const changeCartProductQuantity = async (cartProduct, quantity) => {
  if (quantity > 0) {
    const updatedCartProduct = cartProduct;
    updatedCartProduct.quantity = quantity;
    return cartProduct.save();
  }
  await CartProduct.deleteOne({ _id: cartProduct.id });
  return null;
};

module.exports = (router) => {
  router.get('/cart', authenticated, async (req, res) => {
    try {
      const cartProducts = await CartProduct.find({ userId: req.user.id });
      res.status(200).json(cartProducts);
    } catch (err) {
      res.status(503).json({ error: "Couldn't get cart products" });
    }
  });

  router.post('/cart', authenticated, productExists, async (req, res) => {
    try {
      const cartProduct = await getCartProduct(req);
      const updatedCartProduct = cartProduct ? await changeCartProductQuantity(cartProduct, req.body.quantity) : await createCartProduct(req);
      res.status(201).json(updatedCartProduct);
    } catch (err) {
      res.status(503).json({ error: "Couldn't add products to the cart" });
    }
  });

  router.delete('/cart', authenticated, async (req, res) => {
    try {
      await CartProduct.deleteOne({ _id: req.body.cartProductId });
      res.sendStatus(200);
    } catch (err) {
      res.status(503).json({ error: "Couldn't delete product from the cart" });
    }
  });
};
