"use strict";

/**
	* The main browser object
	*
	*/
let browser = {};

/**
	* Initializes the main browser object
	*
	*/
browser.init = function() {

	browser.addEventListeners();

};

/**
	* Customizes console.log()
	*
	*/
browser.log = function ( message, color='black' ) {
	switch (color) {
		case 'success':  
			color = 'Green';
			break;
		case 'info':     
			color = 'Blue';
			break;
		case 'error':
			color = 'Red';
			break;
		case 'warning':
			color = 'Orange';
			break;
		default: 
			color = color;
	}
	console.log( `%c${message}`, `color:${color}` );

	// browser.log('Hello World!')
	// browser.log('Success!', 'success')
	// browser.log('Error!', 'error')
	// browser.log('Warning!', 'warning')
	// browser.log('Info...', 'info')

	// These are available too:
	// console.error()
	// console.warn()
	// console.table()
};

/**
	* Swaps html element classes: `.no-js` to `.js`
	*
	*/
browser.swapHTMLClasses = function() {

	let el = document.querySelector( 'html' );

	el.classList.toggle( 'no-js' );
	el.classList.toggle( 'js' );

};

/**
	* Adds smooth scrolling to ID links
	*
	*/
browser.addSmoothScrolling = function() {

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

};

/**
	* Registers a service worker
	*
	*/
browser.registerServiceWorker = function() {

	console.log( "Will the service worker register?" );
	navigator.serviceWorker.register( '/serviceworker.js' )
		.then( function( registration ) {
			console.log( 'ServiceWorker registration successful with scope: ', registration.scope );
			// TODO: Uncomment this line if we're using it
			// if (registration.waiting) registration.update();
		} ).catch( function( err ) {
			console.log( 'ServiceWorker registration failed: ', err );
		} );

};

/**
	* Adds browser event listners
	*
	*/
browser.addEventListeners = function() {

	window.addEventListener( 'load', browser.swapHTMLClasses, false );
	window.addEventListener( 'load', browser.addSmoothScrolling, false );

	if ( 'serviceWorker' in navigator ) {
		window.addEventListener( 'load', browser.registerServiceWorker, false );
	}

};

/**
	* Initialize the main browser object
	*
	*/
browser.init();