const User = require('../../models/User');

module.exports = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(503).json({ error: "Couldn't validate email" });
    } else if (user) {
      res.status(409).json({ error: 'This email is already in use' });
    } else {
      next();
    }
  });
};
