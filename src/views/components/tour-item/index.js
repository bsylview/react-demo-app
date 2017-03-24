import React, { Component, PropTypes } from 'react';
import ItemImage from './item-image';
import ItemDescription from './item-description';
import ItemDetails from './item-details';

export class TourItem extends Component {
  constructor() {
    super(...arguments);
  }

  renderTour(tour) {
    return (
      <div className="tour">
        <div className="container-fluid">
          <div className="row no-gutters">
              <div className="col-xs-6 col-sm-3 col-md-3">
                <ItemImage
                  tour={tour}
                />
              </div>
              <div className="col-xs-6 col-sm-5 col-md-5">
                <ItemDescription
                  tour={tour}
                />
              </div>
              <div className="col-xs-6 col-sm-4 col-md-4">
                <ItemDetails
                  tour={tour}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }

  render() {
    const { tour } = this.props;
    return (
      <div>
        {this.renderTour(tour)}
      </div>
    );
  }
}

TourItem.propTypes = {
  tour: PropTypes.object.isRequired
};

export default TourItem;
