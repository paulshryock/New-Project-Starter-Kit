"use strict";

module.exports = function() {

  return {
		"permalink": "./{{ title | slug }}/index.html",
		"content_type": "client",
		"layout": "client",
		"topics": [
			"General"
		]
  };

};