import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { toursReducer } from './tours';

export default combineReducers({
  routing: routerReducer,
  tours: toursReducer
});
