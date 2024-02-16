const { postUser, getLogin } = require("../controllers/usersControllers");

const postUsersHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await postUser({ email, password });
    res.status(200).send(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getUsersHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await getLogin(email, password);
    res.status(200).send(login);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postUsersHandler, getUsersHandler };
