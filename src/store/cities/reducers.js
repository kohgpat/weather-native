import uniq from "lodash/uniq";
import omit from "lodash/omit";
import * as actions from "./actions";

const initialState = {
  entities: {},
  data: []
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    // ALL
    case actions.CITIES_ALL_SUCCESS: {
      return citiesAllSuccess(state, action);
    }
    // ADD
    case actions.CITIES_ADD_SUCCESS: {
      return citiesAddSuccess(state, action);
    }
    // REMOVE
    case actions.CITIES_REMOVE_SUCCESS: {
      return citiesRemoveSuccess(state, action);
    }
    // UPDATE
    case actions.CITIES_UPDATE_SUCCESS: {
      return citiesUpdateSuccess(state, action);
    }
    default: {
      return state;
    }
  }
};

// ALL
const citiesAllSuccess = (state, action) => {
  const newState = {
    ...state,
    entities: {
      ...state.entities,
      ...action.payload.cities.reduce((all, current) => {
        all[current.id] = {
          ...state.entities[current.id],
          ...current
        };

        return all;
      }, {})
    },
    data: uniq([...state.data, ...action.payload.cities.map(city => city.id)])
  };

  return newState;
};

// ADD
const citiesAddSuccess = (state, action) => ({
  ...state,
  entities: {
    ...state.entities,
    [action.payload.city.id]: {
      ...action.payload.city
    }
  },
  data: uniq([...state.data, action.payload.city.id])
});

// REMOVE
const citiesRemoveSuccess = (state, action) => {
  const idx = state.data.findIndex(id => id === action.payload.city.id);

  const newState = {
    ...state,
    entities: omit(state.entities, [action.payload.city.id]),
    data: [...state.data.slice(0, idx), ...state.data.slice(idx + 1)]
  };

  return newState;
};

// UPDATE
const citiesUpdateSuccess = (state, action) => {
  const newState = {
    ...state,
    entities: {
      ...state.entities,
      [action.payload.city.id]: {
        ...state.entities[action.payload.city.id],
        ...action.payload.city
      }
    }
  };

  return newState;
};

export default cities;
