const {
  getCharacters,
  getCharacterById,
} = require("../controllers/characterControllers");

const getCharacterHandler = async (req, res) => {
  try {
    const characters = await getCharacters();
    res.status(200).send(characters);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCharacterByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await getCharacterById(id);
    res.status(200).send(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getCharacterHandler, getCharacterByIdHandler };
