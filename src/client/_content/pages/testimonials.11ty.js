class Page {
  data () {
    return {
      title: 'Testimonials',
      slug: 'testimonials',
      description: 'Check out our testimonials.',
      date: new Date('2020-01-01T00:00:00-5'),
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    let markdown = ''
    for (const post of data.collections.testimonials) {
      markdown += `- [${post.name.first} ${post.name.last}](/testimonials/${post.slug})\n`
    }

    return markdown
  }
}

module.exports = Page
