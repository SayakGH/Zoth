# Zoth 1.0.0

> A simple and flexible authentication package for Node.js applications. This package provides utilities for user registration, login, and token management using JSON Web Tokens (JWT).

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```
## Features

- User registration with password hashing
- User login with token generation
- Token verification
- Secure password storage using bcrypt

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/SayakGH/Zoth.git
$ cd Zoth
```

To install and set up the library, run:

```sh
$ npm i zoth
```

## Usage

## Setting Up

First, make sure to set up your MongoDB connection. Create a file named database.js:

```
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/authentication-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

```
## Registering a User

```
const authService = require('zoth').authService;
const connectDB = require('./database');

// Connect to MongoDB
connectDB();

// Register a new user
authService.registerUser('newuser', 'newuser@example.com', 'password123')
  .then(user => {
    console.log('User registered:', user);
  })
  .catch(error => {
    console.error('Error registering user:', error);
  });

```
## Logging in a User

```
const authService = require('zoth').authService;
const connectDB = require('./database');

// Connect to MongoDB
connectDB();

// Login a user
authService.loginUser('newuser', 'password123')
  .then(token => {
    console.log('Token generated:', token);
  })
  .catch(error => {
    console.error('Error logging in:', error);
  });

```
## Verifying a Token

```
const tokenService = require('zoth').tokenService;

// Token to verify
const token = 'your.jwt.token.here';

// Verify the token
tokenService.verifyToken(token)
  .then(decoded => {
    console.log('Token is valid:', decoded);
  })
  .catch(error => {
    console.error('Invalid token:', error);
  });

```

## Getting User from Token

```
const tokenService = require('zoth').tokenService;

// Token to decode
const token = 'your.jwt.token.here';

// Get user from token
tokenService.getUserFromToken(token)
  .then(user => {
    console.log('User from token:', user);
  })
  .catch(error => {
    console.error('Error getting user from token:', error);
  });

```
## Configuration
Ensure you have a .env file in your project root with your secret key:

```
SECRET_KEY=your_secret_key

```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.



## Contact
<<<<<<< HEAD
For any questions or support, please open an issue or contact the author at your sayakghosh2004sg@gmail.com.
=======
For any questions or support, please open an issue or contact the author at sayakghosh2004sg@gmail.com

## License
[MIT License] © Sayak Ghosh
>>>>>>> c86219000ce9e77e25ff5647fec20a3b6e7bfd73
