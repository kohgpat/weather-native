import * as actions from "./actions";

const initialState = {
  units: "celcius"
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    // UNITS
    case actions.SETTINGS_SET_UNITS: {
      return settingsSetUnits(state, action);
    }
    default: {
      return state;
    }
  }
};

// UNITS
const settingsSetUnits = (state, action) => ({
  ...state,
  units: action.payload.units
});

export default settings;
