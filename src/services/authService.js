const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const tokenService = require('./tokenService');
const hashPassword = require('../utils/hashPassword');
const verifyPassword = require('../utils/verifyPassword');

const registerUser = async (username, email, password) => {
  const hashedPassword = await hashPassword(password);
  const user = new User({ username, email, hashedPassword });
  await user.save();
  return user;
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid username or password');
  
  const isPasswordValid = await verifyPassword(password, user.hashedPassword);
  if (!isPasswordValid) throw new Error('Invalid username or password');
  
  const token = tokenService.generateToken({ id: user._id, username: user.username });
  return token;
};

module.exports = { registerUser, loginUser };
