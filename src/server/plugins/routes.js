exports.plugin = {
  name: 'routesPlugin',
  register:  function (server) {
    server.route(require('../routes/route'))
  }

};
