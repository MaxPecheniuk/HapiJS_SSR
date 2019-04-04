import React from "react";
const path = require('path');
import {renderToString} from "react-dom/server";
import App from "../../universal/App/App";
import {template} from "../template";
import Paths from "../../../config/paths"

export const Routes =[
	{
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: path.resolve(Paths.appPublic),
				index: 'client.js'
			}
		}
	},
	{
		method: 'GET',
		path: '/',
		handler: () => {
			let content = renderToString(
				<App/>
			);
			return template(content)
		}

	}
]



