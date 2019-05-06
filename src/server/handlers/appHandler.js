import React from 'react';
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

const client = new ApolloClient({
  ssrMode: true,
	connectToDevTools: true,
	link:  createHttpLink({
    uri: 'http://localhost:4000', fetch
  }),
  cache: new InMemoryCache(),
});

export const appHandler = (req) => {

  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();


  const html = (
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
      const content = renderToString(html);
      return template(content, reduxState, apolloState)
    })
};
