import React from "react";
import path from 'path';
import {renderToString} from "react-dom/server";
import App from "../../universal/App/App";
import {template} from "../template";

import {Provider} from 'react-redux'
import Paths from "../../../config/paths"

import {createStore} from "redux";
import rootReducer from "../../universal/reducer/roote.reducer";

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
			const store = createStore(rootReducer);

			const state = store.getState();

			let content = renderToString(
				<Provider store={store}>
					<App/>
				</Provider>
			);
			return template(content, state)
		}

	}
]



