export const getCities = state => {
  return state.cities.data.map(id => state.cities.entities[id]);
};

export const isFetching = state => {
  return state.cities.isFetching;
};
