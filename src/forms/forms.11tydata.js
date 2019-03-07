module.exports = function() {

  return {
		"method": "post",
		"action": ".",
		"permalink": "./{{ title | slug }}/index.html",
		"content_type": "form",
		"layout": "form"
  };

};