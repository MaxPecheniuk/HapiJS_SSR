"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./components/App/App"));

var _roote = _interopRequireDefault(require("./reducer/roote.reducer"));

var _reactRouterDom = require("react-router-dom");

var _reactApollo = require("react-apollo");

var _apolloClient = _interopRequireDefault(require("apollo-client"));

var _apolloLinkHttp = require("apollo-link-http");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

require("./index.scss");

// eslint-disable-next-line
var state = window.__REDUX_STATE__; // eslint-disable-next-line

delete window.__REDUX_STATE__;
var store = (0, _redux.createStore)(_roote.default, state);
var client = new _apolloClient.default({
  cache: new _apolloCacheInmemory.InMemoryCache().restore(window.__APOLLO_STATE__),
  link: (0, _apolloLinkHttp.createHttpLink)({
    uri: 'http://localhost:4000'
  }),
  connectToDevTools: true,
  ssrMode: true
});

_reactDom.default.hydrate(_react.default.createElement(_reactApollo.ApolloProvider, {
  client: client
}, _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_App.default, null)))), // eslint-disable-next-line
document.getElementById('root'));