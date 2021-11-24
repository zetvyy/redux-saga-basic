import { all } from "redux-saga/effects";
import hello from "./hello.js";
import counter from "./counter";

export default function* sagas() {
  yield all([hello(), counter()]);
}
