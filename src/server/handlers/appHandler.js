import React from 'react';
const paths = require('../../../config/webpack/paths');
const path = require('path');
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../universal/reducer/roote.reducer';
import { template } from '../template';
import { StaticRouter } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { ChunkExtractor } from '@loadable/server'
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import { addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl';
import { language, messages } from '../../universal/locales/langConfig';
import App from '../../universal/components/App/App';


const client = new ApolloClient({
  // ssrMode: true,
	link:  createHttpLink({
    uri: 'http://localhost:4000', fetch
  }),
  cache: new InMemoryCache(),
});
addLocaleData([...locale_en, ...locale_ru]);

export const appHandler = (req) => {
  const statsFile = path.resolve(paths.loadableStats);
  const extractor = new ChunkExtractor({statsFile});
  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();
  const html =(
    <ApolloProvider client={client}>
      <Provider store={store}>
          <StaticRouter location={req.url.pathname} context={context}>
            <IntlProvider locale={language} messages={messages[language]}>
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
