"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _react = _interopRequireDefault(require("react"));

var _path = _interopRequireDefault(require("path"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("../../universal/App/App"));

var _template = require("../template");

var _reactRedux = require("react-redux");

var _paths = _interopRequireDefault(require("../../../config/paths"));

var _redux = require("redux");

var _roote = _interopRequireDefault(require("../../universal/reducer/roote.reducer"));

var Routes = [{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: _path.default.resolve(_paths.default.appDist),
      index: 'client.js'
    }
  }
}, {
  method: 'GET',
  path: '/',
  handler: function handler() {
    var store = (0, _redux.createStore)(_roote.default);
    var state = store.getState();
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_App.default, null)));
    return (0, _template.template)(content, state);
  }
}];
exports.Routes = Routes;