const Joi = require("joi");

const registerUserSchema = Joi.object({
  name: Joi.string().min(1).max(100).required().messages({
    "string.empty": "El nombre es requerido",
    "any.required": "El nombre es requerido",
  }),
  surname: Joi.string().min(1).max(100).required().messages({
    "string.empty": "El apellido es requerido",
    "any.required": "El apellido es requerido",
  }),
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.empty": "El nombre de usuario es requerido",
    "string.alphanum": "El nombre de usuario debe ser alfanumérico",
    "string.min": "El nombre de usuario debe tener al menos 3 caracteres",
    "any.required": "El nombre de usuario es requerido",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "El correo es requerido",
    "string.email": "El correo debe ser un correo electrónico válido",
    "any.required": "El correo es requerido",
  }),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"))
    .required()
    .messages({
      "string.empty": "La contraseña es requerida",
      "string.min": "La contraseña debe tener al menos 6 caracteres",
      "string.pattern.base":
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
      "any.required": "La contraseña es requerida",
    }),
  role: Joi.string().valid("admin", "user").default("user"),
});

// Puedes crear un esquema similar para el inicio de sesión
const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "El correo es requerido",
    "string.email": "El correo debe ser un correo electrónico válido",
    "any.required": "El correo es requerido",
  }),
  password: Joi.string().required().messages({
    "string.empty": "La contraseña es requerida",
    "any.required": "La contraseña es requerida",
  }),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
};
