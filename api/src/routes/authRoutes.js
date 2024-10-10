const express = require('express');
const {
  handleRegisterUser,
  handleLoginUser,
  handleGetUserProfile,
} = require('../handlers/authHandler');

const router = express.Router();

router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/profile/:id', handleGetUserProfile);

module.exports = router;
