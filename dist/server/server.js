"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Hapi = require('hapi');

var Inert = require('inert');

var port = 9080;

if (process.env.NODE_ENV === "production") {
  port = 8080;
}

var server = Hapi.server({
  port: port,
  host: 'localhost'
});

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return server.register([{
              plugin: require('./plugins/cssHook')
            }, {
              plugin: require('hapi-pino'),
              options: {
                prettyPrint: true,
                logEvents: ['response', 'onPostStart']
              }
            }, Inert, {
              plugin: require('./plugins/routes')
            }]);

          case 2:
            _context.next = 4;
            return server.start();

          case 4:
            // eslint-disable-next-line
            console.log("Server running at: ".concat(server.info.uri));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line


process.on('unhandledRejection', function (err) {
  // eslint-disable-next-line
  console.log(err); // eslint-disable-next-line

  process.exit(1);
});
init();