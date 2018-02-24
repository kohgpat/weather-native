import { all } from "redux-saga/effects";
import cities from "./cities";
import settings from "./settings";

export default function* rootSaga() {
  yield all([cities(), settings()]);
}
