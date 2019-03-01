// Load development CSS
import './../css/development.css';

if ( process.env.NODE_ENV == 'development' ) {

	// Log environment to the console
	console.log( process.env.NODE_ENV + ' environment');

}