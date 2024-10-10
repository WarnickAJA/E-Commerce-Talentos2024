const express = require('express');
const {
  handleGetUsers,
  handleGetUserById,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
} = require('../handlers/userHandler');

const router = express.Router();

router.route('/').get(handleGetUsers).post(handleCreateUser);
router.route('/:id').get(handleGetUserById).put(handleUpdateUser).delete(handleDeleteUser);

module.exports = router;
