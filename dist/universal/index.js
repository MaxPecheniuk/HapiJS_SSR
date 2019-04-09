"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./App/App"));

var _roote = _interopRequireDefault(require("./reducer/roote.reducer"));

require("./index.scss");

// eslint-disable-next-line
delete window.__PRELOADED_STATE__; // eslint-disable-next-line

var state = window.__PRELOADED_STATE__;
var store = (0, _redux.createStore)(_roote.default, state);

_reactDom.default.hydrate(_react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_App.default, null)), document.getElementById('root'));