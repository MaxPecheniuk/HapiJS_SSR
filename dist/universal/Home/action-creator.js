"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrease = exports.increase = void 0;

var _constants = require("../constants/constants");

var increase = function increase() {
  return {
    type: _constants.INCREASE
  };
};

exports.increase = increase;

var decrease = function decrease() {
  return {
    type: _constants.DECREASE
  };
};

exports.decrease = decrease;