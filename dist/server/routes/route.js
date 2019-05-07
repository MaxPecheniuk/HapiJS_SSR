"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _paths = _interopRequireDefault(require("../../../config/webpack/paths"));

var _mockPost = _interopRequireDefault(require("../../../config/mocks/mockPost"));

var _appHandler = require("../handlers/appHandler");

var sources = _path.default.resolve(_paths.default.appDist);

if (process.env.NODE_ENV === "production") {
  sources = _path.default.resolve(_paths.default.appPublic);
}

var Routes = [{
  method: 'GET',
  path: '/public/{param*}',
  handler: {
    directory: {
      path: sources,
      index: true
    }
  }
}, {
  method: 'GET',
  path: '/{param*}',
  handler: _appHandler.appHandler
}, {
  method: 'GET',
  path: '/api/post',
  handler: function handler() {
    return _mockPost.default;
  }
}];
module.exports = Routes;