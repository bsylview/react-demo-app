import { Database } from 'core/services';
import { tourActions } from './actions';
import { Tour } from './tour';

export const tourList = new Database({
  onLoad: tourActions.loadToursFulfilled
}, Tour);
