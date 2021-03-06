const path = require("path");

const appDirectory = path.resolve(__dirname, '../../');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  loadableStats: resolveApp("dist/public/loadable-stats.json"),
  appAssets: resolveApp("src/assets"), // For images and other assets
	appPublic: resolveApp("dist/public"), // Prod built files end up here
	appBuild: resolveApp("dist/build"), // Prod built files end up here
	appConfig: resolveApp("config"), // home config files
	appDist: resolveApp("dist"), // Dev build
  appIndexJs: resolveApp("src/universal/index.tsx"), // Universal entry point
  appPostsListLoader: resolveApp("src/universal/PostsLis/PostsList.tsx"), // Posts list entry point
  PostComments: resolveApp("src/universal/PostComments/PostComments.tsx"), // Post comments entry point
  appHeader: resolveApp("src/universal/Header/Header.tsx"), // Header entry point
  appIndexJsServer: resolveApp("src/server/server.ts"), // Server entry point
  appSrc: resolveApp("src/universal"), // home source
  appTest: resolveApp("src/__tests__"), // home source
  tslintConf: resolveApp("tslint.json"), //TSLint rules
  tsConf: resolveApp("tsconfig.json") //TS config

};
