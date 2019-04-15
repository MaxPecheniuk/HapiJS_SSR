export const template = (content = '', reduxState, apolloState) => {
  console.log('hkjhkjhkhk');
  const page = `
<!doctype html>
	<html>
		<head>
    	<title>Hapi</title>
    	 <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
    </head>
    <body>
    
    	<div id="root">${content}</div>
    
      <script src="client.js"></script>
<script> window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState).replace(/</g,'\\\u003c')}</script> 
    </body>
  </html>`

  return page
}


{/*<script> window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(/</g, '\\u003c')}</script>*/}
