// controllers/authController.js

const User = require('../models/User');

// Controlador para registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ email, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};

// Controlador para autenticar un usuario
const authUser = async (req, res) => {
  const { email, password } = req.body;
  // Aquí iría la lógica de autenticación
  res.json({ message: 'User authenticated successfully' });
};

// Controlador para obtener el perfil del usuario
const getUserProfile = async (req, res) => {
  // Aquí iría la lógica para obtener el perfil
  res.json({ message: 'User profile fetched successfully' });
};

// Exportando los controladores al final
module.exports = {
  registerUser,
  authUser,
  getUserProfile,
};
