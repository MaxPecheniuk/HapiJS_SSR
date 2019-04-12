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
            _context.next = 2;
            return server.register([// cssHook.plugin,
            {
              plugin: require('hapi-pino'),
              options: {
                prettyPrint: true,
                logEvents: ['response', 'onPostStart']
              }
            }, //static file
            Inert]);

          case 2:
            server.route(_route.Routes);
            _context.next = 5;
            return server.start();

          case 5:
            // eslint-disable-next-line
            console.log("Server running at: ".concat(server.info.uri));

          case 6:
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