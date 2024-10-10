const User = require('../models/User');
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/authController');
const { registerUserSchema, loginUserSchema } = require('../validations/userValidation');

const handleRegisterUser = async (req, res, next) => {
  try {
    // Validar entrada usando Joi
    const { error } = registerUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, surname, username, email, password, role } = req.body;
    // Verificar si el usuario o el email ya existen
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario o el correo ya existen' });
    }

    const newUser = await registerUser({ name, surname, username, email, password, role });

    const user = await User.create(newUser);
    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    next(error);
  }
};

// Handler para iniciar sesión
const handleLoginUser = async (req, res, next) => {
  try {
    // Validar entrada usando Joi
    const { error } = loginUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const loginData = await loginUser(user, password);
    res.status(200).json(loginData);
  } catch (error) {
    next(error);
  }
};

// Handler para obtener el perfil del usuario
const handleGetUserProfile = async (req, res, next) => {
  try {
    const userProfile = await getUserProfile(req.params.id);
    return res.status(200).json(userProfile);
  } catch (error) {
    next(error);
  }
};

// Exportando los handlers al final
module.exports = {
  handleRegisterUser,
  handleLoginUser,
  handleGetUserProfile,
};
