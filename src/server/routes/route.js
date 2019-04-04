import React from "react";

const path = require('path');
import {renderToString} from "react-dom/server";
import App from "../../universal/App";
import {template} from "../template";

import {Provider} from 'react-redux'
import Paths from "../../../config/paths"
import store from "../../universal/store/app.store"

export const Routes = [
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
			// const store = createStore(counterApp)
			let content = renderToString(
				<Provider store={store}>
					<App/>
				</Provider>
			);
			return template(content)
		}

	}
]



