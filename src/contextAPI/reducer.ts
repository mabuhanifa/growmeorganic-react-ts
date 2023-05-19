import { Action, StateType } from "../types/types";

export const initialState: StateType = {
  user: {
    name: "",
    phone: "",
    email: "",
  },
  posts: [],
};

export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "ADD_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      throw new Error();
  }
};
