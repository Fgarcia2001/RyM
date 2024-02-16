import {
  GET_CHARACTER_ID,
  GET_VALIDATE_LOGIN,
  SET_LOGIN,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_FAVORITES,
} from "./types";
const initialState = {
  characters: [],
  charactersCopy: [],
  detail: "",
  myFavorites: [],
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
      console.log(payload);
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
