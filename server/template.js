export const template = (content = '') => {
	const page = `
<!doctype html>
	<html>
		<head>
    	<title>Redux Universal Example</title>
    	 <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
    </head>
    <body>
    	<div id="root">${content}</div>
    	<span>TESTTEST</span>
<!--      <script src="/client.js"></script>-->
      <script src="/public/client.js"></script>
    </body>
  </html>`

	return page
}



// window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}