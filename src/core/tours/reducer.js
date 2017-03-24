import { List, Record } from 'immutable';
import { tourActions } from './actions';

export const ToursState = new Record({
  query: '',
  list: new List()
});

export function toursReducer(state = new ToursState(), {payload, type}) {
  switch (type) {
    case tourActions.LOAD_TOURS_FULFILLED:
      return state.set('list', new List(payload.tours));
    case tourActions.QUERY_TOURS:
      return state.set('query', payload.query || '');
    default:
      return state;
  }
}
