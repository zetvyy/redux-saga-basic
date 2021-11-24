import { combineReducers } from "redux";
import hello from "./hello";
import counter from "./counter";

const rootReducer = combineReducers({
  hello,
  counter
});

export default rootReducer;
