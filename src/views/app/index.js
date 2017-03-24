import React, { PropTypes } from 'react';
import Header from 'views/components/header';
import Footer from 'views/components/footer';

function App({ location, children }) {
  return (
    <div>
      <Header />
        <main>{children}</main>
      <Footer location={location} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default App;
