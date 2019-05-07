"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _searchForm = require("../components/SearchForm/reducer/searchForm.reducer");

var rootReducer = (0, _redux.combineReducers)({
  searchFormReducer: _searchForm.searchFormReducer
});
var _default = rootReducer;
exports.default = _default;