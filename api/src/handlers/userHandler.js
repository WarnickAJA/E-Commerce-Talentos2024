// handlers/userHandler.js
const userController = require('../controllers/userController');

// Handler para obtener todos los usuarios
const handleGetUsers = async (req, res, next) => {
  try {
    await userController.getUsers(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para obtener un usuario por ID
const handleGetUserById = async (req, res, next) => {
  try {
    await userController.getUserById(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para actualizar un usuario
const handleUpdateUser = async (req, res, next) => {
  try {
    await userController.updateUser(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para eliminar un usuario
const handleDeleteUser = async (req, res, next) => {
  try {
    await userController.deleteUser(req, res);
  } catch (error) {
    next(error);
  }
};

// Exportando los handlers al final
module.exports = {
  handleGetUsers,
  handleGetUserById,
  handleUpdateUser,
  handleDeleteUser,
};
