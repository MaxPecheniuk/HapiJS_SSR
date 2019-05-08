const Hapi = require('hapi');

let port = 9080; //dev port
if(process.env.NODE_ENV === "production"){
  port = 8080
}

const server = Hapi.server({
  port: port,
  host: 'localhost',

});

const init = async () => {
  await server.register(
    [
      {
        plugin: require('./plugins/cssHook')
      },
      {
        //console info
        plugin: require('hapi-pino'),
        options: {
          prettyPrint: true,
          logEvents: ['response', 'onPostStart']
        }
      },
      {
        //static file
        plugin: require('inert')
      },
      {
        plugin: require('./plugins/routes')
      }
    ]);

  await server.start();
  // eslint-disable-next-line
  console.log(`Server running at: ${server.info.uri}`);
};
// eslint-disable-next-line
process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line
  console.log(err);
// eslint-disable-next-line
  process.exit(1);
});

init();
