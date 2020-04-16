const testimonials = {
  contentType: 'testimonial',
  layout: 'testimonial',
  permalink: './testimonials/{{ testimonial.slug }}/index.html',
  pagination: {
    data: 'collections.testimonials',
    alias: 'testimonial',
    size: 1
  }
}

module.exports = testimonials
