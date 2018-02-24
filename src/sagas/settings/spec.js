/*global it, expect*/
import "regenerator-runtime/runtime";
import { takeEvery, put } from "redux-saga/effects";
import * as settingsActions from "../../store/settings/actions";
import * as citiesActions from "../../store/cities/actions";
import * as settingsSagas from "./index";

it("should call a settingsSetUnits on settingsActions.SETTINGS_SET_UNITS", () => {
  const gen = settingsSagas.settingsFlow();
  const result = takeEvery(
    settingsActions.SETTINGS_SET_UNITS,
    settingsSagas.settingsSetUnits
  );
  expect(gen.next().value).toEqual(result);
});

it("should put CITIES_ALL on settingsActions.SETTINGS_SET_UNITS", () => {
  const gen = settingsSagas.settingsSetUnits();
  const result = put(citiesActions.citiesAll());
  expect(gen.next().value).toEqual(result);
});
