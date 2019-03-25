/******************************************
	* Accessibility
	*****************************************/

/**
	* The main a11y object
	*
	*/
let a11y = {};

/**
	* Initializes the main a11y object
	*
	*/
a11y.init = function() {

	a11y.addEventListeners();

};

/**
	* Requires minimum click time to trigger card link click
	*
	*/
a11y.requireCardClickTime = function() {
	const cards = document.querySelectorAll( '.card' );  
	Array.prototype.forEach.call( cards, card => {  
    let down, up, link = card.querySelector( 'h2 a' );
    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
      up = +new Date();
      if ( (up - down) < 200 ) {
        link.click();
      }
    };
		card.style.cursor = 'pointer';
	} );
};

/**
	* Adds pagination link labels
	*
	*/
a11y.addPaginationLinkLabels = function() {

	let links = document.querySelectorAll( '.pagination a' );

	if ( 0 < links.length ) {

		for (var i = 0; i < links.length; i++) {

			let counter = i + 1,
					string = "Go to Page " + counter;

			if (links[i].getAttribute('aria-current')) {
				string = "Page " + counter + ", Current Page";
			}

			links[i].setAttribute('aria-label', string);
		}

	}

};

/**
	* Adds a11y event listners
	*
	*/
a11y.addEventListeners = function() {

	window.addEventListener( 'load', a11y.requireCardClickTime, false );
	window.addEventListener( 'load', a11y.addPaginationLinkLabels, false );

};

/**
	* Initialize the main a11y object
	*
	*/
a11y.init();