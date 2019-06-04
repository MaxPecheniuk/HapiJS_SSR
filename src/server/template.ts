export const template = (content = '', reduxState, apolloState, scriptsTags, styleTags) => {
  const page = `
<!doctype html>
	<html>
			<head>
			 	<title>Hapi</title>
		   	<meta charset="utf-8">
		   	<meta name="viewport" content="width=device-width, initial-scale=1">
		   	<meta name="theme-color" content="#810051">
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script> window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(/</g, '\\u003c')}</script> 
        <script> window.__REDUX_STATE__ = ${JSON.stringify(reduxState).replace(/</g, '\\\u003c')}</script> 

        ${scriptsTags}
      </body>
  </html>
`;
  return page;
};
