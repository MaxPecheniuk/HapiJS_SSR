import React from 'react';
const paths = require("../../../config/webpack/paths");
const path = require('path');

import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../universal/reducer/roote.reducer';
import App from '../../universal/components/App/App';
import { template } from '../template';
import { StaticRouter } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { ChunkExtractor } from '@loadable/server'

const client = new ApolloClient({
  ssrMode: true,
	connectToDevTools: true,
	link:  createHttpLink({
    uri: 'http://localhost:4000', fetch
  }),
  cache: new InMemoryCache(),
});

export const appHandler = (req) => {
  // debugger
  const statsFile = path.resolve(paths.sF);
  const extractor = new ChunkExtractor({ statsFile });
  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();

  const html = extractor.collectChunks(
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
      const a = extractor.getScriptElements();
      const content = renderToString(html);
      return template(content, reduxState, apolloState)
    })
};
