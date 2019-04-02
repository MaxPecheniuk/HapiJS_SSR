// 'use strict';
// import path from 'path'
import { renderToString } from 'react-dom/server'
import {Routes} from "./server/routes/route";
import {template} from "./server/template";

//path Node.js
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const server = Hapi.server({
	port: 8080,
	host: 'localhost',
	routes: {
		files: {
			relativeTo: Path.join(__dirname, 'src')
		}
	}
});


const handleRender = (req, res) => {
	let content = renderToString(
		<div>
			<App/>
		</div>
)

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
			Inert
		]);
	server.method('handleRender', handleRender, {});

	server.route(Routes);
	await server.start();

	console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();