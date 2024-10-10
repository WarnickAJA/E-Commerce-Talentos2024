const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Función para encriptar la contraseña
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };

// Controlador para registrar un nuevo usuario
const registerUser = async (userData) => {
  const { name, surname, username, email, password, role } = userData;

  // Encriptar contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear objeto del nuevo usuario con la contraseña encriptada
  const newUser = {
    name,
    surname,
    username,
    email,
    password: hashedPassword,
    role,
  };

  return newUser;
};

const loginUser = async (user, passwordInput) => {
  // Verificar contraseña
  const isPasswordValid = await bcrypt.compare(passwordInput, user.password);
  if (!isPasswordValid) {
    throw new Error("Contraseña incorrecta");
  }

  // Crear token JWT
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { token, userId: user._id, username: user.username, role: user.role };
};

// Controlador para obtener el perfil del usuario
const getUserProfile = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
 const { name, role } = user;

  return { name, role };

};

// Exportando los controladores al final
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
