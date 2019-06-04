exports.plugin = {
  name: 'routesPlugin',
  register: function (server: any) {// tslint:disable-line
    server.route(require('../routes/route'));
  }
};