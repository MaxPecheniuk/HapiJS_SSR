import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../universal/reducer/roote.reducer';
import App from '../../universal/components/App/App';
import { template } from '../template';

export const appHandler = () => {
  const store = createStore(rootReducer);

  const state = store.getState();

  let content = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>
  );
  return template(content, state)
};
