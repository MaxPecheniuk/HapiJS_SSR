"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.template = void 0;

var template = function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var reduxState = arguments.length > 1 ? arguments[1] : undefined;
  var apolloState = arguments.length > 2 ? arguments[2] : undefined;
  var page = "\n<!doctype html>\n\t<html>\n\t\t<head>\n    \t<title>Hapi</title>\n    \t <meta charset=\"utf-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <meta name=\"theme-color\" content=\"#810051\">\n    </head>\n    <body>\n    \n    \t<div id=\"root\">".concat(content, "</div>\n    \n      <script src=\"client.js\"></script>\n      <script> window.__APOLLO_STATE__ = ").concat(JSON.stringify(apolloState).replace(/</g, "\\<"), "</script> \n\n\n<script> window.__REDUX_STATE__ = ").concat(JSON.stringify(reduxState).replace(/</g, "\\<"), "</script> \n    </body>\n  </html>");
  return page;
};

exports.template = template;