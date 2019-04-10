"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducer = require("../components/Home/reducer");

var rootReducer = (0, _redux.combineReducers)({
  HomeReducer: _reducer.HomeReducer
});
var _default = rootReducer;
exports.default = _default;