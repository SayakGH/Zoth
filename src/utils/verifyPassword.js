const bcrypt = require('bcryptjs');

const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = verifyPassword;
