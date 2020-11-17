const authenticated = require('./middleware/authenticated');
const productExists = require('./middleware/productExists');

module.exports = (router) => {
  router.get('/cart', authenticated, (req, res) => {
    res.send(req.user.cart);
  });

  router.post('/cart', authenticated, productExists, (req, res) => {
    res.status(201).send('This product exists !');
  });
};
