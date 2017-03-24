import { List } from 'immutable';
import React, { PropTypes } from 'react';
import TourItem from '../tour-item';

const TourList = ({tours}) => {
  let tourItems = tours.map((tour, index) => {
    return (
      <TourItem
        key={index}
        tour={tour}
      />
    );
  });

  return (
      <div>
        {tourItems}
      </div>
  );
};

TourList.propTypes = {
  tours: PropTypes.instanceOf(List)
};

export default TourList;
