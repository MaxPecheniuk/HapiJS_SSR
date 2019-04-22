"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _path = _interopRequireDefault(require("path"));

var _paths = _interopRequireDefault(require("../../../config/webpack/paths"));

var _mockPost = _interopRequireDefault(require("../../../config/mocks/mockPost"));

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
  path: '/{param?}',
  handler: function handler(request) {
    return (0, _appHandler.appHandler)(request);
  }
}, {
  method: 'GET',
  path: '/api/post',
  handler: function handler() {
    return _mockPost.default;
  }
}];
exports.Routes = Routes;