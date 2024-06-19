const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'jdjchbsunsjcsc';

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

const getUserFromToken = (token) => {
  const decoded = verifyToken(token);
  return { id: decoded.id, username: decoded.username };
};

module.exports = { generateToken, verifyToken, getUserFromToken };
