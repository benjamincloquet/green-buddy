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
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (user) {
        comparePasswords(password, user.password, (err, match) => (match ? done(err, user) : done(err, false, { message: 'Incorrect password' })));
      } else {
        done(null, false, { message: 'That email is not registered' });
      }
    } catch (err) {
      done(err);
    }
  }),
);
