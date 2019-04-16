import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import rootReducer from './reducer/roote.reducer';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import fetch from 'node-fetch';
import './index.scss';


// eslint-disable-next-line
const state = window.__REDUX_STATE__;
// eslint-disable-next-line
delete window.__REDUX_STATE__;

const store = createStore(rootReducer, state);

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({uri: 'http://localhost:4000'}),
});

ReactDOM.hydrate(
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