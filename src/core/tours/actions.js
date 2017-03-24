export const tourActions = {
  LOAD_TOURS_FULFILLED: 'LOAD_TOURS_FULFILLED',
  LOAD_FAILED: 'LOAD_FAILED',
  QUERY_TOURS: 'QUERY_TOURS',

  loadToursFulfilled: tours => ({
    type: tourActions.LOAD_TOURS_FULFILLED,
    payload: {tours}
  }),

  loadFailed: () => ({
    type: tourActions.LOAD_FAILED
  }),

  queryTours: query => ({
    type: tourActions.QUERY_TOURS,
    payload: {query}
  })
};
