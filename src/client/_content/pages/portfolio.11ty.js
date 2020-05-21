class Page {
  data () {
    return {
      title: 'Portfolio',
      slug: 'portfolio',
      description: 'Check out our projects.',
      date: new Date('2020-01-01T00:00:00-5'),
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    let markdown = ''
    for (const post of data.collections.projects) {
      markdown += `- [${post.title}](/portfolio/${post.slug})\n`
    }

    return markdown
  }
}

module.exports = Page
