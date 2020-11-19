const productExists = require('./middleware/productExists');
const isAdmin = require('./middleware/isAdmin');

const Product = require('../models/Product');

module.exports = (router) => {
  router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(503).json({ error: "Couldn't get products" });
    }
  });

  router.post('/products', isAdmin, async (req, res) => {
    try {
      const product = await new Product(req.body).save();
      res.status(201).json(product);
    } catch (err) {
      res.status(503).json({ error: "Couldn't add product" });
    }
  });

  router.delete('/products', isAdmin, productExists, async (req, res) => {
    try {
      await Product.deleteOne({ _id: req.body.productId });
      res.sendStatus(200);
    } catch (err) {
      res.status(503).json({ error: "Couldn't delete product" });
    }
  });
};
