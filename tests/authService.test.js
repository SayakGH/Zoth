const authService = require('../src/services/authService');
const mongoose = require('mongoose');
const User = require('../src/models/userModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/authentication-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Authentication Service', () => {
  it('should register a new user', async () => {
    const user = await authService.registerUser('testuser', 'test@example.com', 'password123');
    expect(user.username).toBe('testuser');
  });

  it('should login a user and return a token', async () => {
    await authService.registerUser('loginuser', 'login@example.com', 'password123');
    const token = await authService.loginUser('loginuser', 'password123');
    expect(token).toBeTruthy();
  });
});
