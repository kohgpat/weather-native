// UNITS
export const SETTINGS_SET_UNITS = "SETTINGS_SET_UNITS";
export const settingsSetUnits = (units) => ({
  type: SETTINGS_SET_UNITS,
  payload: {
    units
  }
});
