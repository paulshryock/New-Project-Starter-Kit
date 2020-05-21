class Post {
  data () {
    return {
      contentType: 'testimonial',
      layout: 'testimonial',
      permalink: './testimonials/{{ testimonial.slug }}/index.html',
      pagination: {
        data: 'collections.testimonials',
        alias: 'testimonial',
        size: 1
      },
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return data.testimonial.quote
  }
}

module.exports = Post
