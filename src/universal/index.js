import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import rootReducer from './reducer/roote.reducer';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';


// eslint-disable-next-line
delete window.__PRELOADED_STATE__;
// eslint-disable-next-line
const state = window.__PRELOADED_STATE__;

const store = createStore(rootReducer, state);


ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);