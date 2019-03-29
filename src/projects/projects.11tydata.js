"use strict";

module.exports = function() {

  return {
		"permalink": "./{{ title | slug }}/index.html",
		"content_type": "project",
		"layout": "project",
		"topics": [
			"General"
		]
  };

};