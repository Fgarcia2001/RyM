const { User } = require("../db");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const postUser = async ({ email, password }) => {
  const [user, create] = await User.findOrCreate({
    where: { email },
    defaults: { password },
  });

  if (!create) return "Email ya registrado";

  return "Creado";
};

const getLogin = async (email, password) => {
  const login = await User.findOne({ where: { email } });
  if (!login) return "No existe el usuario";
  if (login.password !== password) return "Contraseña incorrecta";

  const token = jwt.sign({ userId: login.id }, "Stack", { expiresIn: "1d" });

  return { token };
};

module.exports = { postUser, getLogin };
