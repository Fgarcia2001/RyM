import { GET_CHARACTER_ID } from "./types";
import axios from "axios";

const URL_CHAR = "http://localhost:3001/characters/";

const getCharacterId = (id) => {
  return async (dispatch) => {
    try {
      const character = await axios.get(`${URL_CHAR}${id}`);
      dispatch({
        type: GET_CHARACTER_ID,
        payload: character.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export { getCharacterId };
