import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/roote.reducer';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.scss';
import { loadableReady } from '@loadable/component';
import App from './components/App/App';

declare global {
  interface Window {
    __REDUX_STATE__: any;
    __APOLLO_STATE__: any
  }
}

const state = window.__REDUX_STATE__;
delete window.__REDUX_STATE__;

const store = createStore(rootReducer, state);

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({uri: 'http://localhost:4000'}),
});


loadableReady(() => {
  ReactDOM.hydrate(
    // tslint:disable-next-line
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
    ,
    // eslint-disable-next-line
    document.getElementById('root')
  );
})