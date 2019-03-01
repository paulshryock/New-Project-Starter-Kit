const fs = require('fs');

module.exports = function(eleventyConfig) {
	
	/**
		* Add custom filters
		*/
  eleventyConfig.addFilter( "myFilter", function() {});
	
	/**
		* Add layout aliases
		*/
	eleventyConfig.addLayoutAlias('global', '_globals/global');
	eleventyConfig.addLayoutAlias('single', '_layouts/single');
	eleventyConfig.addLayoutAlias('archive', '_layouts/archive');
	eleventyConfig.addLayoutAlias('page', '_layouts/page');
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	eleventyConfig.addLayoutAlias('form', '_layouts/form');
	
	/**
		* Copy static assets
		*/
	const assets = [
		'css',
		'js',
		'img',
		'fonts',
		'_redirects',
		'browserconfig.xml',
		'favicon.ico',
		'humans.txt',
		'manifest.json',
		'robots.txt',
		'serviceworker.js',
	];

	assets.forEach((asset) => {
	  try {
		  if (fs.existsSync(`./src/${asset}`)) {
				eleventyConfig.addPassthroughCopy(`src/${asset}`);
		  }
		} catch(err) {
		  console.error(err)
		}
	});
  
  return {
    dir: {
	    input: "src",
	    output: "dist"
    },
    passthroughFileCopy: true
  };
  
};