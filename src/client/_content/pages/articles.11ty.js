class Page {
  data () {
    return {
      title: 'Articles',
      slug: 'articles',
      description: 'Check out our articles.',
      date: new Date('2020-01-01T00:00:00-5'),
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    let markdown = ''
    for (const post of data.collections.articles) {
      markdown += `- [${post.title}](/articles/${post.slug})\n`
    }

    return markdown
  }
}

module.exports = Page
