const path = require("path");

const appDirectory = path.resolve(__dirname, '../../');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {

  appAssets: resolveApp("src/assets"), // For images and other assets
	appPublic: resolveApp("dist/public"), // Prod built files end up here
	appBuild: resolveApp("dist/build"), // Prod built files end up here
	appConfig: resolveApp("config"), // Home config files
	appDist: resolveApp("dist"), // Dev build
  appIndexJs: resolveApp("src/universal/index.js"), // Universal entry point
  appIndexJsServer: resolveApp("src/server/server.js"), // Server entry point
  appSrc: resolveApp("src/universal"), // Home source
  appTest: resolveApp("src/__tests__") // Home source
};
