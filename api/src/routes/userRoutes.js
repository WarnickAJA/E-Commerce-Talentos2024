// routes/userRoutes.js

const express = require('express');
const {
  handleGetUsers,
  handleGetUserById,
  handleUpdateUser,
  handleDeleteUser,
} = require('../handlers/userHandler');

const router = express.Router();

router.route('/').get(handleGetUsers);
router.route('/:id').get(handleGetUserById).put(handleUpdateUser).delete(handleDeleteUser);

module.exports = router;
