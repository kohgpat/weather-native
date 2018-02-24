import { delay } from "redux-saga";
import {
  all,
  cancel,
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import * as citiesActions from "../../store/cities/actions";
import * as citiesSelectors from "../../store/cities/selectors";
import * as settingsSelectors from "../../store/settings/selectors";
import Api from "../../api";

// WORKERS
export function* citiesAll() {
  const cities = yield select(citiesSelectors.getCities);

  if (cities.length) {
    yield all(
      cities.map(city =>
        call(citiesAdd, {
          payload: {
            city: {
              name: city.name,
              interval: city.params.interval
            }
          }
        })
      )
    );
  }
}

export function* refreshCity(city) {
  try {
    while (true) {
      const units = yield select(settingsSelectors.getUnits);
      const refreshedCity = yield call(Api.cities.find, city.name, units);
      yield put(citiesActions.citiesUpdateSuccess(refreshedCity.data));
      yield call(delay, city.params.interval);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* citiesAdd(action) {
  try {
    const units = yield select(settingsSelectors.getUnits);
    const response = yield call(
      Api.cities.find,
      action.payload.city.name,
      units
    );
    const city = {
      ...response.data,
      params: {
        interval: action.payload.city.interval
      }
    };

    yield put(citiesActions.citiesAddSuccess(city));

    const refresh = yield fork(refreshCity, city);
    const stopRefreshCity = yield take(citiesActions.CITIES_STOP_REFRESH);

    if (stopRefreshCity.payload.city.id === city.id) {
      yield cancel(refresh);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* citiesRemove(action) {
  yield put(citiesActions.citiesRemoveSuccess(action.payload.city));
  yield put(citiesActions.citiesStopRefresh(action.payload.city));
}

export function* citiesUpdate(action) {
  try {
    const units = yield select(settingsSelectors.getUnits);
    const city = yield call(Api.cities.find, action.payload.city.name, units);
    yield put(citiesActions.citiesUpdateSuccess(city));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// WATCHERS
export function* citiesFlow() {
  yield takeLatest(citiesActions.CITIES_ALL, citiesAll);
  yield takeEvery(citiesActions.CITIES_ADD, citiesAdd);
  yield takeLatest(citiesActions.CITIES_REMOVE, citiesRemove);
  yield takeLatest(citiesActions.CITIES_UPDATE, citiesUpdate);
}

export default function* cities() {
  yield all([citiesFlow()]);
}
