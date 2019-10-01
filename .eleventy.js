module.exports = function (eleventyConfig) {

  // Add content collections
  const types = [
    { plural: 'pages', single: 'page' },
    { plural: 'articles', single: 'article' },
    { plural: 'projects', single: 'project' },
    { plural: 'testimonials', single: 'testimonial' }
  ]

  types.map(type => {
    eleventyConfig.addCollection(type.plural, collection => collection.getAll().filter(post => post.data.contentType === type.single))
  })

  // Add API collection
  eleventyConfig.addCollection('api', collection => {
    const posts = collection.getAll()
      .filter(post => !['api', 'cms', 'file'].includes(post.data.contentType))

    return posts.map(post => {
      return {
        title: post.data.title,
        slug: post.data.slug,
        url: post.url,
        contentType: post.data.contentType,
        date: post.data.date,
        excerpt: post.data.excerpt,
        tags: post.data.tags,
        content: post.template.frontMatter.content
      }
    })
  })

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: `build`
    }
  }
}
