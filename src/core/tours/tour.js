import { Record } from 'immutable';

export const Tour = new Record({
  key: null,
  id: null,
  code: null,
  description: null,
  length: null,
  lengthType: null,
  name: null,
  updated: null,
  website: null,
  operatorName: null,
  cities: null,
  dates: null,
  images: null,
  active: null,
  url: null,
  rating: null,
  reviews: null
});
export const Order = {
  ASCENDING: 0,
  DESCENDING: 1
};
