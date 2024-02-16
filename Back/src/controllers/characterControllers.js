const axios = require("axios");
const { Characters } = require("../db");

const apiCharacters = async () => {
  let allCharacters = [];
  for (let i = 1; i < 43; i++) {
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      response.data.results.map((character) => {
        let char = {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          image: character.image,
        };
        allCharacters.push(char);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return allCharacters;
};

const getCharacters = async () => {
  const exist = await Characters.findOne();

  if (!exist) {
    const charactersClean = await apiCharacters();
    await Characters.bulkCreate(charactersClean);
    return "Base de datos cargada";
  }
  return "Ya contiene datos";
};

const getCharacterById = async (id) => {
  try {
    const character = await Characters.findByPk(id);
    if (character) return character;
    else {
      return "ID no encontrado";
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getCharacters, getCharacterById };
