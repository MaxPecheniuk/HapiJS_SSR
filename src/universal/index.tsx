const queryString = require('query-string');
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
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import { IntlProvider } from 'react-intl';
import { messages } from './locales/langConfig';

addLocaleData([...locale_en, ...locale_ru]);

declare global {
  interface Window {
// tslint:disable-next-line
    __REDUX_STATE__: any;
    // tslint:disable-next-line
    __APOLLO_STATE__: any
  }
}

const state = window.__REDUX_STATE__;
delete window.__REDUX_STATE__;

export const store = createStore(rootReducer, state);

let language = queryString.parse(location.search.replace('?', ''));

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({uri: 'http://localhost:4000'}),
  // ssrMode: true
});

loadableReady(() => {
  ReactDOM.hydrate(
    // tslint:disable-next-line
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider locale={language.lang || 'en'} messages={messages[language.lang || 'en']}>
          <App/>
          </IntlProvider>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
    ,
    // eslint-disable-next-line
    document.getElementById('root')
  );
});