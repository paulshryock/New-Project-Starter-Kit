"use strict";

module.exports = function() {

  return {
		"permalink": "./{{ title | slug }}/index.html",
		"content_type": "case-study",
		"layout": "case-study",
		"topics": [
			"General"
		]
  };

};