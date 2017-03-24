import React, { Component, PropTypes } from 'react';
import { TOUR_DESCRIPTION_LENGTH } from './utils';
import _ from 'lodash';

export class ItemDescription extends Component {

  constructor() {
    super(...arguments);
  }

  renderItemDescription(tour) {
    return (
      <div className="tour-item-description">
        <p className="tour-title">
          {tour.name}
        </p>
        <p className="tour-description">
          "{_.truncate(tour.description, {'length': TOUR_DESCRIPTION_LENGTH})}"
        </p>
        <div>
          <div className="custom-col">
            <p className="col-md-6 item-title">DAYS </p>
            <p className="col-md-14 item-description">{tour.length} days </p>
          </div>
          <div className="custom-col">
            <p className="col-md-6 item-title">DESTINATIONS </p>
            <p className="col-md-14 item-description">{tour.cities.length} cities </p>
          </div>
          <div className="custom-col">
            <p className="col-md-6 item-title">STARTS/ENDS </p>
            <p className="col-md-14 item-description">{tour.cities[0].name}/{tour.cities[tour.cities.length - 1].name}</p>
          </div>
          <div className="custom-col">
            <p className="col-md-6 item-title">OPERATOR </p>
            <p className="col-md-14 item-description">{tour.operatorName} </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { tour } = this.props;
    return (
      <div>
        {this.renderItemDescription(tour)}
      </div>
    );
  }
}

ItemDescription.propTypes = {
  tour: PropTypes.object.isRequired
};

export default ItemDescription;
