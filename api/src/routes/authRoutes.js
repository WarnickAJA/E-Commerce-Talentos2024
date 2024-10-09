// routes/authRoutes.js

const express = require('express');
const {
  handleRegisterUser,
  handleAuthUser,
  handleGetUserProfile,
} = require('../handlers/authHandler');

const router = express.Router();

router.post('/register', handleRegisterUser);
router.post('/login', handleAuthUser);
router.get('/profile', handleGetUserProfile);

module.exports = router;
