"use strict";

module.exports = function() {

  return {
		"permalink": "./{{ title | slug }}/index.html",
		"content_type": "testimonial",
		"layout": "testimonial",
		"topics": [
			"General"
		]
  };

};