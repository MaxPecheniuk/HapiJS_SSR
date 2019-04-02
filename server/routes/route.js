export const Routes =[
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return h.file('client.js');

		}
	}
]



