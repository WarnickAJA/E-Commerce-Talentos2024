const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const handleGetUsers = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const handleGetUserById = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const handleCreateUser = async (req, res, next) => {
  try {
    // // Validar entrada usando Joi
    // const { error } = registerUserSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({ message: error.details[0].message });
    // }
    const { name, surname, username, email, password, role } = req.body;
    // Verificar si el usuario o el email ya existen
    // const userExists = await User.findOne({ $or: [{ username }, { email }] });
    // if (userExists) {
    //   return res.status(400).json({ message: 'El usuario o el correo ya existen' });
    // }

    const user = await createUser({
      name,
      surname,
      username,
      email,
      password,
      role,
    });
    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    next(error);
  }
};

const handleUpdateUser = async (req, res, next) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res
        .status(200)
        .json({ message: "Usuario modificado exitosamente", user });
    }
  } catch (error) {
    next(error);
  }
};

const handleDeleteUser = async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "Usuario eliminado exitosamente", user });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleGetUsers,
  handleGetUserById,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
