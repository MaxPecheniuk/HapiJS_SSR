import path from 'path';
import paths from "../../../config/webpack/paths"
import mockList from "../../../config/mocks/mockPost"
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
		path: '/{param?}',
		handler: (request) => {
      return appHandler(request);
		}
	},
  {
    method: 'GET',
    path: '/api/post',
    handler: () => {
      return mockList;
    }
  }

]



