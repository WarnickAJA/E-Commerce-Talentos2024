// handlers/authHandler.js
const authController = require('../controllers/authController');

// Handler para registrar un nuevo usuario
const handleRegisterUser = async (req, res, next) => {
  try {
    // Validación de datos
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    await authController.registerUser(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para autenticar un usuario
const handleAuthUser = async (req, res, next) => {
  try {
    await authController.authUser(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para obtener el perfil del usuario
const handleGetUserProfile = async (req, res, next) => {
  try {
    await authController.getUserProfile(req, res);
  } catch (error) {
    next(error);
  }
};

// Exportando los handlers al final
module.exports = {
  handleRegisterUser,
  handleAuthUser,
  handleGetUserProfile,
};
