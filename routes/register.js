const bcrypt = require('bcryptjs');

const User = require('../models/User');

const hashPassword = (password) => new Promise((resolve, reject) => {
  bcrypt.genSalt(process.env.BCRYPT_SALT_ROUNDS || 10, (saltErr, salt) => {
    if (saltErr) {
      reject(saltErr);
    }
    bcrypt.hash(password, salt, (hashErr, hashedPassword) => {
      if (hashErr) {
        reject(hashErr);
      }
      reject();
    });
  });
});

const registerUser = (user) => new Promise((resolve, reject) => {
  hashPassword(user.password).then((encryptedPassword) => {
    new User({ ...user, password: encryptedPassword })
      .save()
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  }).catch(() => {
    reject();
  });
});

module.exports = (router) => {
  router.post('/', (req, res) => {
    registerUser(req.body)
      .then(() => {
        res.status(201).json();
      })
      .catch(() => {
        res.status(503).json({ error: "Couldn't register new user" });
      });
  });
};
