import { put, all, delay, takeLatest } from "redux-saga/effects";
import { SAY_HELLO_START } from "../types/hello";
import { sayHello } from "../actions/hello";

export function* show() {
  yield delay(3000);
  yield put(sayHello());
}

export default function* helloSagas() {
  yield all([takeLatest(SAY_HELLO_START, show)]);
}
