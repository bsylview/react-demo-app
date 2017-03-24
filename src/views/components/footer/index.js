import React, { PropTypes } from 'react';
import ToursFilters from 'views/components/tours-filters';

const Footer = ({location}) => {
  const { query } = location.query;
  return (
    <footer className="footer">
      <ToursFilters query={query} />
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.object.isRequired
};

export default Footer;
