const passport = require('passport');

module.exports = (router) => {
  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.sendStatus(200);
  });

  router.get('/user', (req, res) => {
    console.log('user!');
    // res.send(req.user);
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
};
