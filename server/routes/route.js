// 'use strict'
// module.export
export const Routes =[
	{
		method: 'GET',
		path: '/',
		handler:  (request, h) => {
			return 'o1k';
		}
	},
	//test method
	{
		method: 'GET',
		path: '/2',
		handler: (request, h) => {

			return h.file('index.html');
		}
	}
]



