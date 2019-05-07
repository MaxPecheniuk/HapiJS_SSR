export const template = (content = '', reduxState, apolloState) => {
  let scripts = `<script src="/public/client.js"></script>`;
  let styles = ``;

  if (process.env.NODE_ENV === 'production') {
    styles = `<link rel="stylesheet" href="/public/universal.css">`;
    scripts = `
      <script src="/public/vendor.js"></script>
      <script src="/public/universal.js"></script>`
  }

  const page = `
<!doctype html>
	<html>
		<head>
    	<title>Hapi</title>
    	 <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <meta name="theme-color" content="#810051">
                  ${styles}

    </head>
    <body>

    	<div id="root">${content}</div>
    ${scripts}
  
      <script> window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(/</g, '\\\u003c')}</script> 


<script> window.__REDUX_STATE__ = ${JSON.stringify(reduxState).replace(/</g, '\\\u003c')}</script> 
    </body>
  </html>`

  return page
}
