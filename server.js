// 'use strict';

import React from 'react'
import {renderToString} from 'react-dom/server'
import {template} from "./server/template";
import App from "./src/App/App";

//path Node.js?
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const server = Hapi.server({
	port: 8080,
	host: 'localhost',
	routes: {
		files: {
			relativeTo: Path.join(__dirname, 'public')
		}
	}
});

// const handleRender = (req, res) => {
// 	let content = renderToString(
// 		<div>
// 			<App/>
// 		</div>
// )
//
// 	return template(content)
// }
// server.method('handleRender', handleRender, {});

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
			Inert
		]);

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			let content = renderToString(
				<div>
					<App/>
				</div>
			)
			return template(content);
		}
	});


	await server.start();

	console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();