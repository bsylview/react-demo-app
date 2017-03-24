import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './views/styles/styles.scss';
import { configureStore } from './core/store';
import Root from './views/root';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');
import 'bootstrap/scss/bootstrap.scss';

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

function init() {
  render(Root);
}

init();
