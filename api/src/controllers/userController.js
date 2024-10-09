// controllers/userController.js

const User = require('../models/User');

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Controlador para obtener un usuario por ID
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Controlador para actualizar un usuario
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User deleted successfully' });
};

// Exportando los controladores al final
module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
