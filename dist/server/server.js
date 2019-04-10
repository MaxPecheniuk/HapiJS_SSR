"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _route = require("./routes/route");

// const cssHook = require('./plugins/cssHook');
var Hapi = require('hapi');

var Inert = require('inert');

var server = Hapi.server({
  port: 9080,
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
            console.log('server');
            _context.next = 3;
            return server.register([// cssHook.plugin,
            {
              plugin: require('hapi-pino'),
              options: {
                prettyPrint: true,
                logEvents: ['response', 'onPostStart']
              }
            }, //static file
            Inert]);

          case 3:
            server.route(_route.Routes);
            _context.next = 6;
            return server.start();

          case 6:
            console.log("Server running at: ".concat(server.info.uri));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});
init();