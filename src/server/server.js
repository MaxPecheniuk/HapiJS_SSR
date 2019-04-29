// const cssHook = require('./plugins/cssHook');
const routesPlugin = require('./plugins/routes');
const Hapi = require('hapi');
const Inert = require('inert');


const server = Hapi.server({
  port: 9080,
  host: 'localhost',
});

const init = async () => {
  await server.register(
    [
      // cssHook.plugin,
      Inert,
      {
        plugin: require('hapi-pino'),
        options: {
          prettyPrint: true,
          logEvents: ['response', 'onPostStart']
        }
      },
	    routesPlugin.plugin
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
