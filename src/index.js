const authService = require('./services/authService');
const tokenService = require('./services/tokenService');

module.exports = {
  registerUser: authService.registerUser,
  loginUser: authService.loginUser,
  verifyToken: tokenService.verifyToken,
  getUserFromToken: tokenService.getUserFromToken
};
