// 'use strict';

import React from 'react'
import {renderToString} from 'react-dom/server'
import {template} from "../public/template";
import App from "../src/App/App";

//path Node.js?
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Hoek = require('hoek');
// const Vision =  require('vision');

const server = Hapi.server({
	port: 8080,
	host: 'localhost',
});


const handleRender = () => {
	let content = renderToString(
			<App/>
	);
	return template(content)
}

const init = async () => {
	await server.register(
		[
			{
				plugin: require('hapi-pino'),
				options: {
					prettyPrint: true,
					logEvents: ['response', 'onPostStart']
				}
			},

			Inert,
			{
				plugin: require('vision')
			}

		]);


	// server.views({
	// 	engines: {
	// 		html: require('handlebars')
	// 	},
	// 	relativeTo: __dirname,
	// 	path: 'public/',
	//
	// });

	server.route({
		method: 'GET',
		path: '/public/{param*}',
		handler: {
			directory: {
				path: '/',
				index: 'client.js'
			}
		}
	});
	server.route({
		method: 'GET',
		path: '/',
		handler:
		handleRender

	});


	await server.start();

	console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
