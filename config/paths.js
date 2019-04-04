const path = require("path");

const appDirectory = path.resolve(__dirname, '..');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
	appAssets: resolveApp("src/assets"), // For images and other assets
	appPublic: resolveApp("dist/public"), // Prod built files end up here
	appConfig: resolveApp("config"), // App config files
	appDist: resolveApp("dist"), // Dev build

	appIndexJs: resolveApp("src/universal/index.js"), // Main entry point
	appSrc: resolveApp("src/universal") // App source
};
