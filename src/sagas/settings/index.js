import * as settingsActions from "../../store/settings/actions";
import * as citiesActions from "../../store/cities/actions";

import { all, put, takeEvery } from "redux-saga/effects";

// WORKERS
export function* settingsSetUnits() {
  yield put(citiesActions.citiesAll());
}

// WATCHERS
export function* settingsFlow() {
  yield takeEvery(settingsActions.SETTINGS_SET_UNITS, settingsSetUnits);
}

export default function* cities() {
  yield all([settingsFlow()]);
}
