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

import {Provider} from "react-redux";
import rootReducer from "./reducer/roote.reducer";
import {createStore} from "redux";


const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, state);


ReactDOM.hydrate(
	<Provider store={store} >
		<App/>
	</Provider>
	,

document.getElementById('root')
)