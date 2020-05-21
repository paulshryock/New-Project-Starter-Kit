const Joi = require('@hapi/joi')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Define Project model
 */
const Project = mongoose.model('Project', new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true, uniqueCaseInsensitive: true, minLength: 1, maxLength: 256 },
  slug: { type: String, lowercase: true, required: true, trim: true, unique: true, uniqueCaseInsensitive: true, minLength: 1, maxLength: 256 },
  content: { type: String, required: true, trim: true },
  client: { type: String, required: true, trim: true },
  // TODO: Make client a related client?, (allow array?)
  status: { type: String, required: true, trim: true, lowercase: true, minLength: 5, maxLength: 9 },
  date: { type: Date, default: Date.now }
}))

// TODO: Finish validation based on model

const validate = {
  /**
   * Validate a project to create
   */
  create: function (project) {
    const schema = Joi.object({
      title: Joi.string()
        .trim()
        .required()
        .min(1)
        .max(256),
      slug: Joi.string()
        .trim()
        .lowercase()
        .required()
        .min(1)
        .max(256),
      content: Joi.string()
        .required()
        .trim(),
      client: Joi.string()
        .trim()
        .required(),
      status: Joi.string()
        .alphanum()
        .trim()
        .lowercase()
        .required()
        .min(5)
        .max(9)
        .valid('draft', 'approved', 'scheduled', 'published'),
      date: Joi.date()
    })

    return schema.validate(project)
  },
  /**
   * Validate a project to update
   */
  update: function (project) {
    const schema = Joi.object({
      title: Joi.string()
        .trim()
        .min(1)
        .max(256),
      slug: Joi.string()
        .trim()
        .lowercase()
        .min(1)
        .max(256),
      content: Joi.string()
        .trim(),
      client: Joi.string()
        .trim(),
      status: Joi.string()
        .alphanum()
        .trim()
        .lowercase()
        .min(5)
        .max(9)
        .valid('draft', 'approved', 'scheduled', 'published'),
      date: Joi.date()
    }).or('title', 'slug', 'content', 'client', 'status', 'date')

    return schema.validate(project)
  }
}

exports.Project = Project
exports.validate = validate
