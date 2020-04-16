const { log } = require('../modules/logger')
const { Testimonial, validate } = require('../models/testimonial')
const _ = require('lodash')

module.exports = {
  /**
   * Get testimonials
   */
  getTestimonials: async (req, res, next) => {
    // Get testimonials
    const testimonials = await Testimonial.find()

    // If no testimonials exist, return 404 error to the client
    if (Array.isArray(testimonials) && !testimonials.length) {
      return res.status(404).send('no testimonials found')
    }

    // Optionally sort testimonials by query paramater
    const sortBy = req.query.sortBy
    if (sortBy) testimonials.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)

    // Return testimonials to the client
    res.send(testimonials)
  },

  /**
   * Create a testimonial
   */
  createTestimonial: async (req, res) => {
    // Validate testimonial
    const { error } = validate.create(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Create testimonial
    let testimonial = new Testimonial(_.pick(req.body, ['name', 'slug', 'quote', 'date']))

    // Add testimonial to the database
    testimonial = await testimonial.save()

    log.info('Testimonial created.', _.pick(testimonial, ['_doc', 'level', 'message', 'timestamp']))

    // Return testimonial to the client
    res.send(testimonial)
  },

  /**
   * Get a testimonial
   */
  getTestimonial: async (req, res, next) => {
    // Get testimonial
    const testimonial = await Testimonial.find({
      _id: req.params.id
    })

    // If testimonial does not exist, 404 error
    if (!testimonial) res.status(404).send('"id" was not found')

    // Return testimonial to the client
    res.send(testimonial)
  },

  /**
   * Update a testimonial
   */
  updateTestimonial: async (req, res) => {
    // Validate testimonial
    const { error } = validate.update(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    // Update testimonial in database with request body keys if they exist
    const requestBody = {}
    if (req.body.name) {
      requestBody.name = {
        first: '',
        last: ''
      }
      if (req.body.name.first) requestBody.name.first = req.body.name.first
      if (req.body.name.last) requestBody.name.last = req.body.name.last
    }
    if (req.body.slug) requestBody.slug = req.body.slug
    if (req.body.quote) requestBody.quote = req.body.quote
    if (req.body.date) requestBody.date = req.body.date

    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, requestBody, { new: true })

    // If testimonial does not exist, return 404 error to the client
    if (!testimonial) return res.status(404).send('"id" was not found')

    log.info('Testimonial updated.', _.pick(testimonial, ['_doc', 'level', 'message', 'timestamp']))

    // Return updated testimonial to client
    res.send(testimonial)
  },

  /**
   * Delete a testimonial
   */
  deleteTestimonial: async (req, res) => {
    // Remove testimonial from database, if it exists
    const testimonial = await Testimonial.findByIdAndRemove(req.params.id)

    // If testimonial does not exist, return 404 error to the client
    if (!testimonial) return res.status(404).send('"id" was not found')

    log.info('Testimonial removed.', _.pick(testimonial, ['_doc', 'level', 'message', 'timestamp']))

    // Return deleted testimonial to client
    res.send(testimonial)
  }
}
