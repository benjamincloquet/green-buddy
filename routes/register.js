const { hashPassword } = require('../services/bcrypt');
const validateUniqueEmail = require('./middleware/validateUniqueEmail');

const User = require('../models/User');

const registerUser = async (user) => {
  const hashedPassword = await hashPassword(user.password);
  await new User({ ...user, password: hashedPassword }).save();
};

module.exports = (router) => {
  router.post('/register', validateUniqueEmail, async (req, res) => {
    try {
      await registerUser(req.body);
      res.sendStatus(201).json();
    } catch (err) {
      res.status(503).json({ error: "Couldn't register new user" });
    }
  });

  router.post('/validate-email', validateUniqueEmail, (req, res) => {
    res.status(200);
  });
};
