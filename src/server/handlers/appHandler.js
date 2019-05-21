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
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { getDataFromTree } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { ChunkExtractor } from '@loadable/server'

import App from '../../universal/components/App/App';


const client = new ApolloClient({
  // ssrMode: true,
	link:  createHttpLink({
    uri: 'http://localhost:4000', fetch
  }),
  cache: new InMemoryCache(),
});

export const appHandler = (req) => {
  const statsFile = path.resolve(paths.loadableStats);
  const extractor = new ChunkExtractor({statsFile});
  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();
  const html =(
    <ApolloProvider client={client}>
      <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App/>
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
