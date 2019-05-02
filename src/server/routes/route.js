import path from 'path';
import paths from "../../../config/webpack/paths"
import mockPost from "../../../config/mocks/mockPost"
import { appHandler } from '../handlers/appHandler';

const Routes = [

  {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path:    path.resolve(paths.appDist),
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: (request) => {
      return appHandler(request);
    }
  },
  {
    method: 'GET',
    path: '/api/post',
    handler: () => {
      return mockPost;
    }
  },

];

module.exports = Routes;

