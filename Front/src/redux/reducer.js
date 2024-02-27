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
  SET_VALIDATE,
  ORDER_FAV,
  FILTER_GENDER,
  SET_FIRSTFAV,
} from "./types";
const initialState = {
  characters: [],
  charactersCopy: [],
  detail: "",
  myFavorites: [],
  myFavoritesCopy: [],
  favoritesFirst: [],
  order: 0,
  filtered: false,
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
          myFavoritesCopy: [...state.myFavorites, payload.character],
        };
      }
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== payload.character.id
        ),
        myFavoritesCopy: state.myFavorites.filter(
          (fav) => fav.id !== payload.character.id
        ),
      };
    case SET_GET_FAV:
      return {
        ...state,
        characters: [],
        charactersCopy: [],
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
        myFavoritesCopy: payload,
        favoritesFirst: payload,
      };
    case ORDER_FAV:
      let copia = [...state.myFavorites];
      switch (payload) {
        case "Ascendente":
          return {
            ...state,
            myFavorites: [...state.myFavorites.sort((a, b) => a.id - b.id)],
            order: 1,
          };
        case "Descendente":
          return {
            ...state,
            myFavorites: [...state.myFavorites.sort((a, b) => b.id - a.id)],
            order: 2,
          };
        case "":
          if (!state.filtered) {
            return {
              ...state,
              myFavorites: [...state.myFavoritesCopy],
              order: 0,
            };
          }
          return {
            ...state,
            myFavorites: [...state.filtered],
            order: 0,
          };
      }
    case FILTER_GENDER:
      if (!payload) {
        switch (state.order) {
          case 0:
            return {
              ...state,
              myFavorites: [...state.myFavoritesCopy],
              filtered: false,
            };
          case 1:
            return {
              ...state,
              myFavorites: [
                ...state.myFavoritesCopy.sort((a, b) => a.id - b.id),
              ],
              filtered: false,
            };
          case 2:
            return {
              ...state,
              myFavorites: [
                ...state.myFavoritesCopy.sort((a, b) => b.id - a.id),
              ],
              filtered: false,
            };
        }
      }
      switch (state.order) {
        case 0:
          return {
            ...state,
            filtered: [
              ...state.myFavoritesCopy.filter(
                (char) => char.gender === payload
              ),
            ],
            myFavorites: [
              ...state.myFavoritesCopy.filter(
                (char) => char.gender === payload
              ),
            ],
          };
        case 1:
          return {
            ...state,
            filtered: [
              ...state.myFavoritesCopy.filter(
                (char) => char.gender === payload
              ),
            ],
            myFavorites: [
              ...state.myFavoritesCopy
                .filter((char) => char.gender === payload)
                .sort((a, b) => a.id - b.id),
            ],
          };
        case 2:
          return {
            ...state,
            filtered: [
              ...state.myFavoritesCopy.filter(
                (char) => char.gender === payload
              ),
            ],
            myFavorites: [
              ...state.myFavoritesCopy
                .filter((char) => char.gender === payload)
                .sort((a, b) => b.id - a.id),
            ],
          };
      }
    case SET_VALIDATE:
      return {
        ...state,
        validate: !state.validate,
      };
    case SET_FIRSTFAV:
      return {
        ...state,
        favoritesFirst: [...state.myFavoritesCopy],
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
