import {
  GET_CHARACTER_ID,
  GET_VALIDATE_LOGIN,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_FAVORITES,
  DELETE_CHARACTER,
  FAV_HANDLER,
  SET_GET_FAV,
  SET_VALIDATE,
} from "./types";
import axios from "axios";

const URL = "http://localhost:3001";

const getCharacterId = (id) => {
  return async (dispatch) => {
    try {
      const character = await axios.get(`${URL}/characters/${id}`);

      if (character.data === "ID no encontrado") {
        return "No existe";
      } else {
        return dispatch({
          type: GET_CHARACTER_ID,
          payload: character.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const character = await axios.get(`${URL}/characters/${id}`);

      dispatch({
        type: GET_DETAIL,
        payload: character.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const clearDetail = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DETAIL,
    });
  };
};
const getLoginValidate = (state) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/user/login`, state);

      return response.data;
      dispatch({
        type: GET_VALIDATE_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const signup = (date) => {
  return async () => {
    try {
      const response = await axios.post(`${URL}/user/signup`, date);
      return response.data;
    } catch (error) {
      alert("No se pudo crear usuario");
    }
  };
};

const getFavorites = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch({
        type: GET_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

const deleteCharacter = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CHARACTER,
      payload: id,
    });
  };
};
const favoritesHandler = (fav, character) => {
  return (dispatch) => {
    dispatch({
      type: FAV_HANDLER,
      payload: { fav, character },
    });
  };
};

const setValidateGetFav = (validate) => {
  return (dispatch) => {
    dispatch({
      type: SET_GET_FAV,
      payload: validate,
    });
  };
};
const postFav = (objeto, token) => {
  return async () => {
    try {
      await axios.post(`${URL}/favorites`, objeto, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return true;
    } catch (error) {
      alert("No se pudo guardar cambios");
    }
  };
};
const setValidate = () => {
  return (dispatch) => {
    dispatch({
      type: SET_VALIDATE,
    });
  };
};
export {
  getCharacterId,
  getLoginValidate,
  getDetail,
  clearDetail,
  signup,
  getFavorites,
  deleteCharacter,
  favoritesHandler,
  setValidateGetFav,
  postFav,
  setValidate,
};
