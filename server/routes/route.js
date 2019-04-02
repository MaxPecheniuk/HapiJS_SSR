// 'use strict'
// module.export
// const Path = require('path');

export const Routes =[
	{
		method: 'GET',
		path: '/',
		handler:  (request, h) => {
			return 'ok';
		}
	},
	//test method
	{
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: '.',
				redirectToSlash: true
			}
		}
	}
]



