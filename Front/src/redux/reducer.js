import { GET_CHARACTER_ID } from "./types";
const initialState = {
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTER_ID:
      return {
        ...state,
        characters: [...state.characters, payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
