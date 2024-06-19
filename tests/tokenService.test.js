const tokenService = require('../src/services/tokenService');

describe('Token Service', () => {
  it('should generate and verify a token', () => {
    const token = tokenService.generateToken({ id: '123', username: 'testuser' });
    const decoded = tokenService.verifyToken(token);
    expect(decoded.username).toBe('testuser');
  });

  it('should get user from token', () => {
    const token = tokenService.generateToken({ id: '123', username: 'testuser' });
    const user = tokenService.getUserFromToken(token);
    expect(user.username).toBe('testuser');
  });
});
