import React from 'react';
const paths = require('../../../config/webpack/paths');
const path = require('path');
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../universal/reducer/roote.reducer.js';
import { template } from '../template';
import { StaticRouter } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { ChunkExtractor } from '@loadable/server'
import { IntlProvider } from 'react-intl';
import App from '../../universal/components/App/App';
import messages_ru from '../../universal/locales/ru';
import messages_en from '../../universal/locales/en';

export const messages = {
  'ru': messages_ru,
  'en': messages_en,
};

const client = new ApolloClient({
	link:  createHttpLink({
    uri: 'http://localhost:4000', fetch
  }),
  cache: new InMemoryCache(),
});

export const appHandler = (req) => {
  const extractor = new ChunkExtractor({
      statsFile: path.resolve(paths.loadableStats),
    });
  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();
  const {pathname, search} = req.url;
  const {lang} = req.query;
  const html =(
    <ApolloProvider client={client}>
      <Provider store={store}>
          <StaticRouter location={pathname + search} context={context}>
            <IntlProvider locale={lang||'en'} messages={messages[lang||"en"]} >
              <App/>
            </IntlProvider>
          </StaticRouter>
      </Provider>
    </ApolloProvider>
  );

  return getDataFromTree(html)
    .then(() => {
      let apolloState = client.extract();
      const content = renderToString(extractor.collectChunks(html));
      const scriptTags = extractor.getScriptTags();
      const styleTags = extractor.getStyleTags();
      return template(content, reduxState, apolloState, scriptTags, styleTags)
    })
};