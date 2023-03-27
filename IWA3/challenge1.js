// configuration.js

const company = 'ACME Inc.'
const year = 2022
 

// scripts.js

import company from 'configuration'
import year from 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
 

//-- index.html --//

/*<html>
	<header>
		<scripts src="./scripts.js">
  </header>

	<body>
		<h1>Welcome</h1>
		<p>This is our wesite</p>
	</body>

	<footer>Loading...</footer>
</html> */