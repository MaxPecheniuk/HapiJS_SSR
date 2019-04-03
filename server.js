// 'use strict';

import React from 'react'
import {renderToString} from 'react-dom/server'
import {template} from "./public/template";
import App from "./src/App/App";

//path Node.js?
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Hoek = require('hoek');
// const Vision =  require('vision');

const server = Hapi.server({
	port: 8080,
	host: 'localhost',
	// routes: {
	// 	files: {
	// 		relativeTo: Path.join(__dirname, 'HapiJS')
	// 	}
	// }
});
// const handleRender = (request, h) => {
// 	let content = renderToString(
// 		<div>
// 			<App/>
// 		</div>
// 	);
//
// 	 // template(content)
// 	console.log(template(content));
//
// }

const test = (request, h) => {
	let content = renderToString(
			<App/>
	);

	return `<!doctype html>
	<html>
		<head>
    	<title>Hapi</title>
    	 <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
    </head>
    <body>
    	<div id="root">${content}</div>
    
<script src="client.js"></script>

    </body>
  </html>`

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


	server.views({
		engines: {
			html: require('handlebars')
		},
		relativeTo: __dirname,
		path: 'public/',

	});

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: 'public/',
				index: 'client.js'
			}
		}
	});
	server.route({
		method: 'GET',
		path: '/',
		handler:
			test

	});


	await server.start();

	console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});
// handleRender()
init();
