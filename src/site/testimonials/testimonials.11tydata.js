module.exports = function () {
  return {
    author: {
      name: 'John Doe',
      role: 'Manager',
      company: 'Acme'
    },
    contentType: 'testimonial',
    layout: 'site/testimonial',
    permalink: './site/testimonials/{{ slug }}/index.html',
    seoTitle: 'Testimonial from {{ author.name }} of {{ author.company }}'
  }
}
