import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
// const hook = require('css-modules-require-hook');
// import csshook from 'css-modules-require-hook/preset'
// hook({
// 	// generateScopedName: '[name]__[local]___[hash:base64:5]',
// 	extensions: ['.scss'],
// 	rootDir: path.join(__dirname, '..')
// });
import './index.scss'
ReactDOM.hydrate(
	<App/>,

document.getElementById('root')
)