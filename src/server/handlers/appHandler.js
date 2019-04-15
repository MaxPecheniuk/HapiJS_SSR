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


export const appHandler = (req) => {
  console.log('111111111111111111111111');

  const store = createStore(rootReducer);
  const context = {};
  const reduxState = store.getState();


  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:4000',

    }),
    cache: new InMemoryCache(),
  });

  const App = (<ApolloProvider client={client}>
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  </ApolloProvider>);

  getDataFromTree(App).then(() => {
    let apolloState = client.extract();

    const content = renderToString(App);
    return template(content, reduxState, apolloState)

  });



};

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from '../../universal/reducer/roote.reducer';
// import App from '../../universal/components/App/App';
// import { template } from '../template';
// import { StaticRouter } from 'react-router';
//
// export const appHandler = (req) => {
//   const store = createStore(rootReducer);
//   const context = {};
//   const state = store.getState();
//
//   let content = renderToString(
//     <Provider store={store}>
//       <StaticRouter location={req.url} context={context}>
//         <App/>
//       </StaticRouter>
//     </Provider>
//   );
//   return template(content, state)
// };