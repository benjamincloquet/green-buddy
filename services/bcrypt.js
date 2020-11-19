const bcrypt = require('bcryptjs');

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(process.env.BCRYPT_SALT_ROUNDS || 10);
  return bcrypt.hash(password, salt);
};

exports.comparePasswords = bcrypt.compare;
