const {
  postFavorites,
  getFavorites,
} = require("../controllers/favoritesControllers");
const jwt = require("jsonwebtoken");

const verificacion = (token) => {
  return jwt.verify(token.split(" ")[1], "Stack", (error, decoded) => {
    if (error) {
      return "Invalid Token";
    }
    return decoded.userId;
  });
};

const postFavoritesHandler = async (req, res) => {
  const token = req.headers.authorization;
  const { favId } = req.body;
  if (!token) return res.status(200).send("No existe token");
  const response = verificacion(token);
  if (isNaN(response)) return res.status(401).send({ message: `${response}` });
  try {
    const userId = response;
    const tryPost = await postFavorites(userId, favId);
    res.status(200).json(tryPost);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getFavoritesHandler = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(200).send("No existe token");
  const response = verificacion(token);
  if (isNaN(response)) return res.status(401).send({ message: `${response}` });
  try {
    const userId = response;
    const favorites = await getFavorites(userId);
    Array.isArray(favorites)
      ? res.status(200).json(favorites)
      : res.status(400).send(favorites);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postFavoritesHandler, getFavoritesHandler };
