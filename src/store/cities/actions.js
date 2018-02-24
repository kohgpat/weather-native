// ALL
export const CITIES_ALL = "CITIES_ALL";
export const citiesAll = () => ({
  type: CITIES_ALL
});

export const CITIES_ALL_SUCCESS = "CITIES_ALL_SUCCESS";
export const citiesAllSuccess = cities => ({
  type: CITIES_ALL_SUCCESS,
  payload: {
    cities
  }
});

// ADD
export const CITIES_ADD = "CITIES_ADD";
export const citiesAdd = city => ({
  type: CITIES_ADD,
  payload: {
    city
  }
});

export const CITIES_ADD_SUCCESS = "CITIES_ADD_SUCCESS";
export const citiesAddSuccess = city => ({
  type: CITIES_ADD_SUCCESS,
  payload: {
    city
  }
});

// REMOVE
export const CITIES_REMOVE = "CITIES_REMOVE";
export const citiesRemove = city => ({
  type: CITIES_REMOVE,
  payload: {
    city
  }
});

export const CITIES_REMOVE_SUCCESS = "CITIES_REMOVE_SUCCESS";
export const citiesRemoveSuccess = city => ({
  type: CITIES_REMOVE_SUCCESS,
  payload: {
    city
  }
});

// UPDATE
export const CITIES_UPDATE = "CITIES_UPDATE";
export const citiesUpdate = city => ({
  type: CITIES_UPDATE,
  payload: {
    city
  }
});

export const CITIES_UPDATE_SUCCESS = "CITIES_UPDATE_SUCCESS";
export const citiesUpdateSuccess = city => ({
  type: CITIES_UPDATE_SUCCESS,
  payload: {
    city
  }
});

// STOP_REFRESH
export const CITIES_STOP_REFRESH = "CITIES_STOP_REFRESH";
export const citiesStopRefresh = city => ({
  type: CITIES_STOP_REFRESH,
  payload: {
    city
  }
});
