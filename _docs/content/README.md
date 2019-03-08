# Content

- [Default Content Types](#default-content-types)
- [Markup and Styling](#markup-and-styling)
- [Add a Content Type](#add-a-content-type)
- [Add a Content Type API](#add-a-content-type-api)
- [Add a Content Type Archive](#add-a-content-type-archive)

## Default Content Types

- page
- archive
- article

## Markup and Styling

Single content type pages (i.e., an article) have the `.single` body class, and archive content type pages (i.e., an articles archive) have the `.archive` body class.

All content items use the `.post` class. To style a single article, use `.single .post`. To style an article on an archive page, use `.archive .post`.

## Add a Content Type

1. Create a folder with the plural content type name (i.e., `/articles`)
1. Create a front matter template with the singular content type name (i.e., `/articles/article.front-matter.template`), and include all desired data fields for this content type
1. Create a default data file for this content type with the plural content type name (make sure this matches the folder name, i.e., `/articles/articles.json`), and remember to include a layout
1. If this content type will use a new layout, create that template file (i.e., `/_includes/_layouts/article.html`)
1. If you created a new layout, add a layout alias using `eleventyConfig.addLayoutAlias()`:

	```javascript
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	```
	
1. In `.eleventy.js`, use `eleventyConfig.addCollection()` to add a custom collection to return content from the new content type:

	```javascript
	// Return articles
	eleventyConfig.addCollection("articles", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});
	});
	```

## Add a Content Type API
	
1. To create a custom API that returns content from this content type, create a custom collection in `.eleventy.js` using `eleventyConfig.addCollection()` that returns an object with the specific data fields you want for the API:

	```javascript
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
				tags: item.data.tags,
				inputPath: item.inputPath, // `inputPath` is required to use `templateContent`
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
			};
		});

	});
	```
	
1. Then use an `.ejs` template to generate the `.json` file:

	```ejs
	---
	permalink: api/articles.json
	content_type: api
	---
	<%- JSON.stringify(collections.api_articles) -%>
	```
	
	You will be able to access this from `/api/articles.json`
	
## Add a Content Type Archive

1. Create a new archive layout template file (i.e., `/_includes/_layouts/articles.html`)
1. Add a layout alias using `eleventyConfig.addLayoutAlias()`:

	```javascript
	eleventyConfig.addLayoutAlias('articles', '_layouts/articles');
	```
	
1. Create an archive page for this content type (i.e., `/archives/articles.md`)

	```javascript
	---
	title: Articles
	excerpt: This is the Articles archive excerpt.
	seo_title: Articles by Cardi B.
	layout: articles
	---
	```