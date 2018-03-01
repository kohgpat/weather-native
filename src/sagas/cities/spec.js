/*global it, expect*/
import "regenerator-runtime/runtime";
import { all, call, fork, take, put, select } from "redux-saga/effects";
import * as settingsSelectors from "../../store/settings/selectors";
import * as citiesActions from "../../store/cities/actions";
import * as citiesSelectors from "../../store/cities/selectors";
import * as citiesSagas from "./index";
import Api from "../../api/index";

it("should call a citiesAll on citiesActions.CITIES_ALL without cities in store", () => {
  const gen = citiesSagas.citiesAll();

  const selectCities = select(citiesSelectors.getCities);
  expect(gen.next().value).toEqual(selectCities);
});

it("should call a citiesAll on citiesActions.CITIES_ALL with cities in store", () => {
  const gen = citiesSagas.citiesAll();

  const selectCities = select(citiesSelectors.getCities);
  expect(gen.next().value).toEqual(selectCities);

  const cities = [{ id: 1, name: "Moscow", params: { interval: 100 } }];

  expect(
    gen.next([{ id: 1, name: "Moscow", params: { interval: 100 } }]).value
  ).toEqual(
    all(
      cities.map(city =>
        put(
          citiesActions.citiesAdd({
            name: city.name,
            interval: city.params.interval
          })
        )
      )
    )
  );
});

it("should call a citiesAdd on citiesActions.CITIES_ADD", () => {
  const action = {
    payload: {
      city: {
        name: "Moscow",
        interval: 100
      }
    }
  };

  const settings = {
    units: "celcius"
  };

  const response = {
    data: {
      id: 1,
      name: "Moscow"
    }
  };

  const city = {
    id: 1,
    name: "Moscow",
    params: { interval: action.payload.city.interval }
  };

  const gen = citiesSagas.citiesAdd(action);

  expect(gen.next().value).toEqual(select(settingsSelectors.getUnits));

  expect(gen.next(settings.units).value).toEqual(
    call(Api.cities.find, action.payload.city.name, settings.units)
  );

  expect(gen.next(response).value).toEqual(
    put(citiesActions.citiesAddSuccess(city))
  );

  expect(gen.next().value).toEqual(fork(citiesSagas.refreshCity, city));

  expect(gen.next().value).toEqual(take(citiesActions.CITIES_STOP_REFRESH));
});

it("should remove cities on citiesActions.CITIES_REMOVE", () => {
  const action = {
    payload: {
      city: {
        id: 1,
        name: "Moscow",
        params: {
          interval: 100
        }
      }
    }
  };

  const gen = citiesSagas.citiesRemove(action);

  expect(gen.next().value).toEqual(
    put(citiesActions.citiesRemoveSuccess(action.payload.city))
  );

  expect(gen.next().value).toEqual(
    put(citiesActions.citiesStopRefresh(action.payload.city))
  );
});

it("should update cities on citiesActions.CITIES_UPDATE", () => {
  const action = {
    payload: {
      city: {
        id: 1,
        name: "Moscow",
        params: {
          interval: 100
        }
      }
    }
  };

  const settings = {
    units: "celcius"
  };

  const gen = citiesSagas.citiesUpdate(action);

  expect(gen.next().value).toEqual(select(settingsSelectors.getUnits));

  expect(gen.next(settings.units).value).toEqual(
    call(Api.cities.find, action.payload.city.name, settings.units)
  );

  expect(gen.next(action.payload.city).value).toEqual(
    put(citiesActions.citiesUpdateSuccess(action.payload.city))
  );
});
