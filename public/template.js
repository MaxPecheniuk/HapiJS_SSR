export const template = (content = '') => {
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
    

      <script src="./client.js"></script>
    </body>
  </html>`

	return page
}