import _ from 'lodash';

const DEFAULT_TOTAL_PRICE_ITEM = 0;
const DEFAULT_PRIMARY_PIC = 0;
const DEFAULT_AVAILABILITY_THRESHOLD = 5;
export const TOUR_DESCRIPTION_LENGTH = 120;

export class Utils {
  static getPrimaryPic(tour) {
    let pics = _.filter(tour.images, function(value) {
      return value.is_primary === true;
    });
    if (pics.length > 0) {
      return pics[0];
    }
    else {
      return tour.images[DEFAULT_PRIMARY_PIC];
    }
  }

  static getPrimaryDate(tour) {
    let availabilityTours = _.sortBy(tour.dates, function(value) {
      return value.availability;
    });
    if (availabilityTours.length > 0) {
      return availabilityTours[availabilityTours.length - 1];
    }
    else {
      return availabilityTours[DEFAULT_TOTAL_PRICE_ITEM];
    }
  }

  static isAvailableDanger(availability) {
    return availability < DEFAULT_AVAILABILITY_THRESHOLD;
  }

  static isNumber(n) {
    return Number(n) === n && n % 1 === 0;
  }
}
