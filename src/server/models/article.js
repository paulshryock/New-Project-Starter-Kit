const Joi = require('@hapi/joi')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const uniqueValidator = require('mongoose-unique-validator')

/**
 * Define Article model
 */
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 255 },
  slug: { type: String, required: true, trim: true, maxLength: 255, lowercase: true, unique: true, uniqueCaseInsensitive: true },
  content: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true, maxLength: 255 },
  // TODO: Make author a related user, (allow array?)
  // and finish validation based on the updated model
  status: { type: String, required: true, trim: true, maxLength: 24, lowercase: true },
  tags: [{ type: String, trim: true, lowercase: true }],
  date: { type: Date, default: Date.now }
}))

const validate = {
  /**
   * Validate an article to create
   */
  create: function (article) {
    const schema = Joi.object({
      title: Joi.string()
        .required()
        .trim()
        .max(255),
      slug: Joi.string()
        .required()
        .trim()
        .max(255)
        .lowercase(),
      content: Joi.string()
        .required()
        .trim(),
      author: Joi.string()
        .required()
        .trim()
        .max(255),
      status: Joi.string()
        .required()
        .trim()
        .max(24)
        .alphanum()
        .lowercase()
        .valid('draft', 'approved', 'scheduled', 'published'),
      tags: Joi.array()
        .items(Joi.string()
          .trim()
          .max(255)
          .alphanum()
          .lowercase()
        ),
      date: Joi.date()
    })

    return schema.validate(article)
  },
  /**
   * Validate an article to update
   */
  update: function (article) {
    const schema = Joi.object({
      title: Joi.string()
        .trim()
        .max(255),
      slug: Joi.string()
        .trim()
        .max(255)
        .lowercase(),
      content: Joi.string()
        .trim(),
      author: Joi.string()
        .trim()
        .max(255),
      status: Joi.string()
        .trim()
        .max(24)
        .alphanum()
        .lowercase()
        .valid('draft', 'approved', 'scheduled', 'published'),
      tags: Joi.array()
        .items(Joi.string()
          .trim()
          .max(255)
          .alphanum()
          .lowercase()
        ),
      date: Joi.date()
    }).or('title', 'slug', 'content', 'author', 'status', 'tags', 'date')

    return schema.validate(article)
  }
}

exports.Article = Article
exports.validate = validate
