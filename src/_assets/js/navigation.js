/******************************************
	* Navigation
	*****************************************/

/**
	* The main navigation object
	*
	*/
let navigation = {};

/**
	* Initializes the main navigation object
	*
	*/
navigation.init = function() {

	// navigation.addEventListeners();
	navigation.addMobileNavigation();

};

/**
	* Adds mobile navigation menu toggle button
	*
	*/
navigation.addNavButton = function() {

	let nav = document.querySelector('.navigation'),
			menu = document.querySelector('.navigation ul'),
			button = document.createElement( 'button' ),
			span = document.createElement( 'span' ),
			hamburger1 = span.cloneNode(),
			hamburger2 = span.cloneNode(),
			hamburger3 = span.cloneNode();

	span.textContent = 'Menu';
	span.classList.add( 'screen-reader-text' );
	hamburger1.classList.add( 'hamburger', 'hamburger__1' );
	hamburger2.classList.add( 'hamburger', 'hamburger__2' );
	hamburger3.classList.add( 'hamburger', 'hamburger__3' );
	button.appendChild( span );
	button.appendChild( hamburger1 );
	button.appendChild( hamburger2 );
	button.appendChild( hamburger3 );
	button.setAttribute( 'aria-expanded', 'false' );
	nav.setAttribute( 'aria-expanded', 'false' );

	button = nav.insertBefore( button, menu );

};

/**
	* Removes mobile navigation menu toggle button
	*
	*/
navigation.removeNavButton = function() {

	let nav = document.querySelector('.navigation'),
			button = document.querySelector( '.navigation button' );

	if (button) {
		button = nav.removeChild( button );
	}

};

/**
	* Sets mobile navigation menu toggle button text
	*
	*/
navigation.setNavButtonText = function() {

	let button = document.querySelector( '.navigation button span' );

	if ( 'Menu' == button.textContent ) {
		button.textContent = 'Close';
	} else if ( 'Close' == button.textContent ) {
		button.textContent = 'Menu';
	}

};

/**
	* Hides mobile navigation menu
	*
	*/
navigation.hideNavMenu = function() {

	let nav = document.querySelector('.navigation'),
			menu = document.querySelector('.navigation ul');

	menu.setAttribute( 'hidden', '' );
  menu.classList.remove('is-active');
  nav.setAttribute('aria-expanded', 'false');

};

/**
	* Shows mobile navigation menu
	*
	*/
navigation.showNavMenu = function() {

	let nav = document.querySelector('.navigation'),
			menu = document.querySelector('.navigation ul');

	menu.removeAttribute( 'hidden' );
  menu.classList.add('is-active');
  nav.setAttribute('aria-expanded', 'true');

};

/**
	* Toggles navigation button and menu elements' states
	*
	*/
navigation.toggleNavElementsStates = function() {

	let menu = document.querySelector('.navigation ul'),
			links = document.querySelectorAll('.navigation ul a');

  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    navigation.hideNavMenu();
  } else {
    this.setAttribute('aria-expanded', 'true');
    navigation.showNavMenu();
    links[0].focus();
  }

  navigation.setNavButtonText();

};

/**
	* Toggles navigation button and menu elements
	*
	*/
navigation.toggleNavElements = function( mq ) {

	if (mq.matches) { // Tablet and up

		let button = document.querySelector( '.navigation button' );

		if (button) {
			button.removeEventListener( 'click', navigation.toggleNavElementsStates, false );
		}
		navigation.removeNavButton();
		navigation.showNavMenu();

	} else { // Mobile

		navigation.addNavButton();
		let button = document.querySelector( '.navigation button' );

		if (button) {
			button.addEventListener( 'click', navigation.toggleNavElementsStates, false );
		}
		navigation.hideNavMenu();

	}

};


/**
	* Adds mobile navigation
	*
	*/
navigation.addMobileNavigation = function() {

	const nav = require('./../../_data/hamburger.11tydata.js');

	let query = nav.mediaQuery || '37.5rem',
			mq = window.matchMedia( `(min-width: ${query})` );

	navigation.toggleNavElements( mq ); // Call listener function at run time
	mq.addListener( navigation.toggleNavElements ); // Attach listener function on state changes

};

/**
	* Adds navigation event listners
	*
	*/
// navigation.addEventListeners = function() {

// };

/**
	* Initialize the main navigation object
	*
	*/
navigation.init();