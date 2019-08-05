const htmlmin = require('html-minifier')

module.exports = function(eleventyConfig) {

  /**
    * Configure BrowserSync
    */
  eleventyConfig.setBrowserSyncConfig({
    port: 8081
  })

  // Add Liquid filter: timePosted
  eleventyConfig.addLiquidFilter("timePosted", date => {
    const numDays = ((Date.now() - date) / (1000 * 60 * 60 * 24))
    const daysPosted = Math.round( parseFloat( numDays ) )
    const weeksPosted = parseFloat( (numDays / 7).toFixed(0) )
    const monthsPosted = parseFloat( (numDays / 30).toFixed(0) )
    const yearsPosted = parseFloat( (numDays / 365).toFixed(1) )

    if( daysPosted < 7 ) {
      return daysPosted + " day" + (daysPosted !== 1 ? "s" : "") + ' ago'
    } else if( daysPosted < 30 ) {
      return weeksPosted + " week" + (daysPosted !== 1 ? "s" : "") + ' ago'
    } if( daysPosted < 365 ) {
      return monthsPosted + " month" + (daysPosted !== 1 ? "s" : "") + ' ago'
    } else {
      return yearsPosted + " year" + (yearsPosted !== 1 ? "s" : "") + ' ago'
    }
  })

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })
  
  /**
    * Add collections
    */
  
  // Return pages
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getAll().filter(function(post) {
      return post.data.contentType == "page";
    })
  })
  
  // Return articles
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getAll().filter(function(post) {
      return post.data.contentType == "article";
    })
  })
  
  // Return projects
  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getAll().filter(function(post) {
      return post.data.contentType == "project";
    })
  })
  
  // Return testimonials
  eleventyConfig.addCollection("testimonials", function(collection) {
    return collection.getAll().filter(function(post) {
      return post.data.contentType == "testimonial";
    })
  })
  
  // Return API
  eleventyConfig.addCollection("api", function(collection) {

    return collection.getAll().map(post => {
      return {
        title: post.data.title,
        slug: post.data.slug,
        permalink: post.data.permalink,
        url: post.url,
        excerpt: post.data.excerpt,
        date: post.data.date,
        content_type: post.data.content_type
      }
    })

  })

  // Passthrough file copy
  eleventyConfig.addPassthroughCopy("process/css")
  eleventyConfig.addPassthroughCopy("process/fonts")
  eleventyConfig.addPassthroughCopy("process/img")
  eleventyConfig.addPassthroughCopy("process/js")
  
  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "build"
    }
  }
  
}