const { hashPassword } = require('../services/bcrypt');
const validateUniqueEmail = require('./middleware/validateUniqueEmail');

const User = require('../models/User');

const registerUser = (user) => new Promise((resolve, reject) => {
  hashPassword(user.password).then((encryptedPassword) => {
    new User({ ...user, password: encryptedPassword })
      .save()
      .then(() => {
        resolve();
      });
  }).catch(() => {
    reject();
  });
});

module.exports = (router) => {
  router.post('/register', validateUniqueEmail, (req, res) => {
    registerUser(req.body)
      .then(() => {
        res.status(201).json();
      })
      .catch(() => {
        res.status(503).json({ error: "Couldn't register new user" });
      });
  });

  router.post('/validate-email', validateUniqueEmail, (req, res) => {
    res.status(200);
  });
};
