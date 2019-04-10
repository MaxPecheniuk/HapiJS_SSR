import path from 'path';
import paths from "../../../config/webpack/paths"
import { appHandler } from '../handlers/appHandler';

export const Routes = [
	{
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: path.resolve(paths.appDist),
				index: 'client.js'
			}
		}
	},
	{
		method: 'GET',
		path: '/',
		handler: () => {
      return appHandler();
		}

	}
]



