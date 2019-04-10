"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _react = _interopRequireDefault(require("react"));

var _path = _interopRequireDefault(require("path"));

var _paths = _interopRequireDefault(require("../../../config/webpack/paths"));

var _appHandler = require("../handlers/appHandler");

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
    return (0, _appHandler.appHandler)();
  }
}];
exports.Routes = Routes;