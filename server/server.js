'use strict';

import {Routes} from "./routes/route";

const Hapi = require('hapi');

const server = Hapi.server({
	port: 8080,
	host: 'localhost'
});




const init = async () => {
	await server.register([{
		plugin: require('hapi-pino'),
		options: {
			prettyPrint: true,
			logEvents: ['response', 'onPostStart']
		}
	},
		require('inert')]);
	// await server.register(require('inert'));
	server.route(Routes);
	// server.route({
	// 	method: 'GET',
	// 	path: '/hello',
	// 	handler: (request, h) => {
	//
	// 		return h.file('index.html');
	// 	}
	// });
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();