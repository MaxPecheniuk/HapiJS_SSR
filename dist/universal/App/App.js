"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _Home = _interopRequireDefault(require("../Home/Home"));

function App() {
  return _react.default.createElement(_Home.default, null);
}