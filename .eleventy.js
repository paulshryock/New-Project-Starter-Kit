const fs = require('fs');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
	
	/**
		* Add custom filters
		*/

	// Add custom filter
	// eleventyConfig.addFilter("myFilter", function(value) {
	// 	return value;
	// });

	// Add timePosted filter
	eleventyConfig.addLiquidFilter("timePosted", date => {
		let numDays = ((Date.now() - date) / (1000 * 60 * 60 * 24));
		let daysPosted = Math.round( parseFloat( numDays ) );
		let weeksPosted = parseFloat( (numDays / 7).toFixed(0) );
		let monthsPosted = parseFloat( (numDays / 30).toFixed(0) );
		let yearsPosted = parseFloat( (numDays / 365).toFixed(1) );

		if( daysPosted < 7 ) {
			return daysPosted + " day" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} else if( daysPosted < 30 ) {
			return weeksPosted + " week" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} if( daysPosted < 365 ) {
			return monthsPosted + " month" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} else {
			return yearsPosted + " year" + (yearsPosted !== 1 ? "s" : "") + ' ago';
		}
	});
	
	/**
		* Add custom filters/transforms
		*/

  // addFilter is deprecated and renamed, use the Configuration API instead
  // eleventyConfig.addFilter( "myFilter", function() {});

  // eleventyConfig.addTransform("transform-name", function(content, outputPath) {});
  // eleventyConfig.addTransform("async-transform-name", async function(content, outputPath) {});

	// Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
	
	/**
		* Add layout aliases
		*/
	eleventyConfig.addLayoutAlias('global', '_globals/global');
	eleventyConfig.addLayoutAlias('single', '_layouts/single');
	eleventyConfig.addLayoutAlias('archive', '_layouts/archive');
	eleventyConfig.addLayoutAlias('page', '_layouts/page');
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	eleventyConfig.addLayoutAlias('articles', '_layouts/articles');
	
	/**
		* Add custom collections
		*/
	
	// Return all content including archives
	eleventyConfig.addCollection("everything", function(collection) {
		return collection.getAll().filter(function(item) {
			return	item.data.content_type !== "api" &&
							item.data.content_type !== "cms" &&
							item.data.content_type !== "css";
		});
	});
	
	// Return all content except archives
	eleventyConfig.addCollection("all", function(collection) {
		return collection.getAll().filter(function(item) {
			return	item.data.content_type !== "api" &&
							item.data.content_type !== "cms" &&
							item.data.content_type !== "css" &&
							item.data.content_type !== "archive" &&
							item.data.content_type !== "search-results";
		});
	});
	
	// Return navigation items
	eleventyConfig.addCollection("navigation", function(collection) {
		return collection.getAll().filter(function(item) {
			return "navigation" in item.data;
		}).sort( function(a,b){ return a.data.navigation - b.data.navigation } );
	});
	
	// Return pages
	eleventyConfig.addCollection("pages", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "page";
		});
	});
	
	// Return archives
	eleventyConfig.addCollection("archives", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "archive";
		});
	});
	
	// Return articles
	eleventyConfig.addCollection("articles", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});
	});
	
	// Return API navigation
	eleventyConfig.addCollection("api_navigation", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return "navigation" in item.data;
		}).sort( function(a,b){ return a.data.navigation - b.data.navigation } );

		return items.map(item => {
			return {
  			title: item.data.title,
  			navigation: item.data.navigation,
			};
		});

	});
	
	// Return API pages
	eleventyConfig.addCollection("api_pages", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "page";
		});

		return items.map(item => {
			return {
				title: item.data.title,
				seo_title: item.data.seo_title,
				display_title: item.data.display_title,
				nav_title: item.data.nav_title,
				excerpt: item.data.excerpt,
				seo_description: item.data.seo_description,
				date: item.data.date,
				navigation: item.data.navigation,
				content_type: item.data.content_type,
				topics: item.data.topics,
				skills: item.data.skills,
				tags: item.data.tags,
				inputPath: item.inputPath,
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
			};
		});

	});
	
	// Return API articles
	eleventyConfig.addCollection("api_articles", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});

		return items.map(item => {
			return {
				title: item.data.title,
				seo_title: item.data.seo_title,
				display_title: item.data.display_title,
				nav_title: item.data.nav_title,
				excerpt: item.data.excerpt,
				seo_description: item.data.seo_description,
				date: item.data.date,
				navigation: item.data.navigation,
				content_type: item.data.content_type,
				topics: item.data.topics,
				skills: item.data.skills,
				tags: item.data.tags,
				inputPath: item.inputPath,
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
			};
		});

	});

	// Return search index
  eleventyConfig.addCollection("api_searchIndex", function(collection) {

  	let items = collection.getAll().filter(function(item) {
			return	( item.data.content_type !== "api" ) &&
							( item.data.slug !== "sitemap" ) &&
							( item.data.slug !== "404" ) &&
							( item.data.slug !== "offline" );
		});

		return items.map(item => {
  		return {
				title: item.data.title,
				seo_title: item.data.seo_title,
				display_title: item.data.display_title,
				nav_title: item.data.nav_title,
				excerpt: item.data.excerpt,
				seo_description: item.data.seo_description,
				date: item.data.date,
				navigation: item.data.navigation,
				content_type: item.data.content_type,
				topics: item.data.topics,
				skills: item.data.skills,
				tags: item.data.tags,
				inputPath: item.inputPath,
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
  		};
  	});

  });
	
	/**
		* Copy static assets
		*/
	const assets = [
		'css',
		'js',
		'img',
		'fonts',
		'cms',
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