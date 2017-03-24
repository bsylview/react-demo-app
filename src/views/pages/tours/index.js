import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getVisibleTours } from 'core/tours';
import TourList from 'views/components/tour-list';

const ToursPage = ({tours}) => {
  return (
    <div className="tours-container">
      <TourList
        tours={tours}
      />
    </div>
  );
};

ToursPage.propTypes = {
  tours: PropTypes.instanceOf(List)
};

//=====================================
//  CONNECT
//-------------------------------------
const mapStateToProps = state => ({
  tours: getVisibleTours(state)
});

export default connect(
  mapStateToProps
)(ToursPage);
