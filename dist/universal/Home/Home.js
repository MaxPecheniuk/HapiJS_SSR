"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actionCreator = require("./action-creator");

require("../index.scss");

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.HomeReducer.count
  };
};

var mapDispatchToProps = {
  increase: _actionCreator.increase,
  decrease: _actionCreator.decrease
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck2.default)(this, Home);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Home).apply(this, arguments));
  }

  (0, _createClass2.default)(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          count = _this$props.count,
          increase = _this$props.increase,
          decrease = _this$props.decrease;
      return _react.default.createElement("div", {
        className: "red"
      }, count, _react.default.createElement("button", {
        onClick: increase
      }, "+"), _react.default.createElement("button", {
        onClick: decrease
      }, "-"));
    }
  }]);
  return Home;
}(_react.default.Component);

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

exports.default = _default;