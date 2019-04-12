import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../universal/reducer/roote.reducer';
import App from '../../universal/components/App/App';
import { template } from '../template';
import { StaticRouter } from 'react-router';

export const appHandler = (req) => {
  const store = createStore(rootReducer);
  const context = {};
  const state = store.getState();
console.log(req.url);
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
      <App/>
      </StaticRouter>
    </Provider>
  );
  return template(content, state)
};
