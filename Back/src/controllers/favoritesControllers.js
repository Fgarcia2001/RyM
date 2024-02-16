const { User, Characters } = require("../db");

const postFavorites = async (userId, favId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) return "User not found";
    const characters = await Characters.findAll({ where: { id: favId } });
    if (favId.length !== characters.length)
      return "No se encuentra id de uno o mas personaje/s en la base de datos.";
    const charactersDeleted = await user.getCharacters();

    if (charactersDeleted.length !== 0)
      await user.removeCharacters(charactersDeleted);

    await user.addCharacters(favId);

    return "Personajes agregados";
  } catch (error) {
    return error;
  }
};

const getFavorites = async (userId) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) return "User not found";
    const favorites = await user.getCharacters();

    const modifiedFavorites = favorites.map((favorite) => {
      const { user_character, ...modifiedFavorites } = favorite.toJSON();
      return modifiedFavorites;
    });
    return modifiedFavorites;
  } catch (error) {
    return error;
  }
};

module.exports = { postFavorites, getFavorites };
