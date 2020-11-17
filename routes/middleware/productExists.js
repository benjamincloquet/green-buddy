const Product = require('../../models/Product');

module.exports = (req, res, next) => {
  Product.findById(req.body.productId, (err, product) => {
    if (err || !product) {
      res.status(400).json({ error: "Product doesn't exist" });
    } else {
      next();
    }
  });
};
