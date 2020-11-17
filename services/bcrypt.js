const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => new Promise((resolve, reject) => {
  bcrypt.genSalt(process.env.BCRYPT_SALT_ROUNDS || 10, (saltErr, salt) => {
    if (saltErr) {
      reject(saltErr);
    }
    bcrypt.hash(password, salt, (hashErr, hashedPassword) => {
      if (hashErr) {
        reject(hashErr);
      }
      resolve(hashedPassword);
    });
  });
});

exports.comparePasswords = (password, storedPassword, resolve) => {
  bcrypt.compare(password, storedPassword, resolve);
};
