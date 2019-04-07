import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import rootReducer from './reducer/roote.reducer';

import './index.scss';
// eslint-disable-next-line
delete window.__PRELOADED_STATE__;
// eslint-disable-next-line
const state = window.__PRELOADED_STATE__;

const store = createStore(rootReducer, state);


ReactDOM.hydrate(
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>,

  // eslint-disable-next-line
  document.getElementById('root'));