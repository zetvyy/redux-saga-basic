import { put, all, delay, takeEvery } from "redux-saga/effects";
import { INCREMENT_START, DECREMENT_START } from "../types/counter";
import { incrementCounter, decrementCounter } from "../actions/counter";

export function* increment() {
  yield delay(3000);
  yield put(incrementCounter());
}

export function* decrement() {
  yield delay(3000);
  yield put(decrementCounter());
}

export default function* sagas() {
  yield all([
    takeEvery(INCREMENT_START, increment), 
    takeEvery(DECREMENT_START, decrement)
  ]);
}
