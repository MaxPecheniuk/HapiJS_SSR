const Routes = require('../routes/route');

exports.plugin = {
  name: 'routesPlugin',
  register:  function (server) {
   server.route( Routes)
  }

};
