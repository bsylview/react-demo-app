import { createSelector } from 'reselect';
import { Order } from './tour';

export function getTours(state) {
  return state.tours;
}

export function getTourList(state) {
  return getTours(state).list;
}

export function getTourQuery(state) {
  return getTours(state).query;
}

export const getVisibleTours = createSelector(
  getTourQuery,
  getTourList,
  (query, tourList) => {
    if (query.sort !== undefined && query.sort === 'reviews') {
      return tourList.sort((tourA, tourB) => {
        if (query.order.toString() === Order.ASCENDING.toString()) {
          return tourA.reviews > tourB.reviews;
        }
        else {
          return tourA.reviews < tourB.reviews;
        }
      });
    }
    if (query.filter !== undefined && query.filter === 'rating') {
      return tourList.filter(tour => tour.rating.toString() === query.rating.toString());
    }
    return tourList;
  }
);
