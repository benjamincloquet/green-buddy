const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { comparePasswords } = require('./bcrypt');

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email }).then((user) => {
      if (!user) {
        done(null, false, { message: 'That email is not registered' });
      } else {
        comparePasswords(password, user.password, (err, match) => (match ? done(err, user) : done(err, false, { message: 'Incorrect password' })));
      }
    }).catch((err) => done(err));
  }),
);
