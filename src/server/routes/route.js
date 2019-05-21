import path from 'path';
import paths from "../../../config/webpack/paths"
import mockPost from "../../../config/mocks/mockPost"
import { appHandler as handler} from '../handlers/appHandler';

let sources =  path.resolve(paths.appDist);
if (process.env.NODE_ENV === "production"){
  sources =  path.resolve(paths.appPublic);
}

const Routes = [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: sources,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler
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
