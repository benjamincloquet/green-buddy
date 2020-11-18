const productExists = require('./middleware/productExists');
const isAdmin = require('./middleware/isAdmin');

const Product = require('../models/Product');

module.exports = (router) => {
  router.get('/products', (req, res) => {

  });

  router.post('/products', isAdmin, async (req, res) => {
    try {

    } catch (err) {
      res.status(503).json({ error: "Couldn't add product" });
    }
  });

  router.delete('/products', isAdmin, productExists, async (req, res) => {
    try {
      await Product.deleteOne({ id: req.body.productId });
      res.sendStatus(200);
    } catch (err) {
      res.status(503).json({ error: "Couldn't delete product" });
    }
  });
};
