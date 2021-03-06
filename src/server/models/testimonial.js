const Joi = require('@hapi/joi')
const mongoose = require('mongoose')

/**
 * Define Testimonial model
 */
const Testimonial = mongoose.model('Testimonial', new mongoose.Schema({
  name: {
    first: { type: String, trim: true, required: true, minLength: 1, maxLength: 128 },
    last: { type: String, trim: true, required: true, minLength: 1, maxLength: 128 }
  },
  slug: { type: String, lowercase: true, required: true, trim: true, unique: true, uniqueCaseInsensitive: true, minLength: 1, maxLength: 256 },
  // TODO: Add company?
  // TODO: Add role?
  quote: { type: String, trim: true, required: true },
  date: { type: Date, default: Date.now }
}))

// TODO: Finish validation based on model

const validate = {
  /**
   * Validate a testimonial to create
   */
  create: function (testimonial) {
    const schema = Joi.object({
      name: Joi.object({
        first: Joi.string()
          .trim()
          .required()
          .min(1)
          .max(128),
        last: Joi.string()
          .trim()
          .required()
          .min(1)
          .max(128)
      }),
      slug: Joi.string()
        .trim()
        .lowercase()
        .required()
        .min(1)
        .max(256),
      quote: Joi.string()
        .trim()
        .required(),
      date: Joi.date()
    })

    return schema.validate(testimonial)
  },
  /**
   * Validate a testimonial to update
   */
  update: function (testimonial) {
    const schema = Joi.object({
      name: Joi.object({
        first: Joi.string()
          .trim()
          .min(1)
          .max(128),
        last: Joi.string()
          .trim()
          .min(1)
          .max(128)
      }),
      slug: Joi.string()
        .trim()
        .lowercase()
        .min(1)
        .max(256),
      quote: Joi.string()
        .trim(),
      date: Joi.date()
    }).or('name.first', 'name.last', 'slug', 'quote', 'date')

    return schema.validate(testimonial)
  }
}

exports.Testimonial = Testimonial
exports.validate = validate
