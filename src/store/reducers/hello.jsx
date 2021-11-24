import { SAY_HELLO, SAY_SOMETHING } from "../types/hello";

const initialState = {
  data: "Hello world!"
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return {
        ...state,
        data: "Hello Idan!"
      };
    case SAY_SOMETHING:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default helloReducer;
