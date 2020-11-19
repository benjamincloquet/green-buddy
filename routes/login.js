const passport = require('passport');

module.exports = (router) => {
  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.sendStatus(200);
  });

  router.get('/user', (req, res) => {
    res.send(req.user);
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
};
