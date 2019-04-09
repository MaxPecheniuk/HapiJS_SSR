"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeReducer = exports.initialState = void 0;

var _constants = require("../constants/constants");

var initialState = {
  count: 14
};
exports.initialState = initialState;

var HomeReducer = function HomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.INCREASE:
      return {
        count: state.count + 1
      };

    case _constants.DECREASE:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};

exports.HomeReducer = HomeReducer;