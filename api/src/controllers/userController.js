const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getUsers = async () => {
  return (users = await User.find());
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("Usuario no encontrando");
  }
  return user;
};

const createUser = async (userData) => {
  const { name, surname, username, email, password, role } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    surname,
    username,
    email,
    password: hashedPassword,
    role,
  };
  const user = await User.create(newUser);
  return user;
};

const updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
