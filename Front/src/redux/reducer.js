import {
  GET_CHARACTER_ID,
  GET_VALIDATE_LOGIN,
  SET_LOGIN,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_FAVORITES,
  DELETE_CHARACTER,
  FAV_HANDLER,
  SET_GET_FAV,
} from "./types";
const initialState = {
  characters: [],
  charactersCopy: [],
  detail: "",
  myFavorites: [],
  getFavOnly1: false,
  validate: false,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTER_ID:
      if (state.characters === undefined) {
        return {
          ...state,
          characters: [payload],
          charactersCopy: [payload],
        };
      }
      return {
        ...state,
        characters: [...state.characters, payload],
        charactersCopy: [...state.characters, payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((char) => char.id !== payload),
      };
    case FAV_HANDLER:
      if (!payload.fav) {
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload.character],
        };
      }
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== payload.character.id
        ),
      };
    case SET_GET_FAV:
      return {
        ...state,
        getFavOnly1: payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: "",
      };
    case GET_VALIDATE_LOGIN:
      return {
        ...state,
        login: payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
