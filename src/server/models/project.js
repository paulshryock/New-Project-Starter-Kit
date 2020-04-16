const Joi = require('@hapi/joi')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Define Project model
 */
const Project = mongoose.model('Project', new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true, uniqueCaseInsensitive: true },
  // TODO: Add min/max lengths
  slug: { type: String, lowercase: true, required: true, trim: true, unique: true, uniqueCaseInsensitive: true },
  // TODO: Add min/max lengths
  client: { type: String, required: true, trim: true },
  // TODO: Make client a related client?, (allow array?)
  status: { type: String, required: true, trim: true, lowercase: true },
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
        .required(),
      slug: Joi.string()
        .trim()
        .lowercase()
        .required(),
      client: Joi.string()
        .trim()
        .required(),
      status: Joi.string()
        .alphanum()
        .trim()
        .lowercase()
        .required()
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
        .trim(),
      slug: Joi.string()
        .trim()
        .lowercase(),
      client: Joi.string()
        .trim(),
      status: Joi.string()
        .alphanum()
        .trim()
        .lowercase()
        .valid('draft', 'approved', 'scheduled', 'published'),
      date: Joi.date()
    }).or('title', 'slug', 'client', 'status', 'date')

    return schema.validate(project)
  }
}

exports.Project = Project
exports.validate = validate
