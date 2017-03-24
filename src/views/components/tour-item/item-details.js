import React, { Component, PropTypes } from 'react';
import { Utils } from './utils';
import classNames from 'classnames';
import moment from 'moment';

export class ItemDetails extends Component {

  constructor() {
    super(...arguments);
  }

  renderDetails(tour) {
    let primaryAvailableDate = Utils.getPrimaryDate(tour);

    return (
      <div className="item-details">
        <p className="item-price-title">Total price</p>
        <p className="item-price-details">{primaryAvailableDate.usd}$</p>
        <hr />
        <div className="custom-item-col">
          <div>{moment(tour.dates[0].start).format('DD MMM')}</div>
          <div className={classNames({'danger': Utils.isAvailableDanger(tour.dates[0].availability)})}>{tour.dates[0].availability} seats left</div>
        </div>
        <div className="custom-item-col">
          <div>{moment(tour.dates[1].start).format('DD MMM')}</div>
          <div className={classNames({'danger': Utils.isAvailableDanger(tour.dates[1].availability)})}>{tour.dates[1].availability} seats left</div>
        </div>
        <hr />
        <a type="button" className="view-more-btn btn btn-primary btn-block" target="blank" href={tour.url} >View More</a>
      </div>
    );
  }

  render() {
    const { tour } = this.props;
    return (
      <div>
        {this.renderDetails(tour)}
      </div>
    );
  }
}

ItemDetails.propTypes = {
  tour: PropTypes.object.isRequired
};

export default ItemDetails;
