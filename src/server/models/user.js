const Joi = require('@hapi/joi')
const passwordComplexity = require('joi-password-complexity')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

/**
 * Define User model schema
 */
const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, minLength: 5, maxLength: 255, unique: true, uniqueCaseInsensitive: true },
  password: { type: String, required: true , minLength: 12, maxLength: 1024 },
  role: { type: String, trim: true, required: true, minLength: 3, maxLength: 5 }
})

userSchema.plugin(uniqueValidator)

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({
    sub: this._id, // subject
    role: this.role,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // expires in 1 week
    iat: Date.now() // Creation time
  }, config.get('jwtPrivateKey'))

  return token
}

userSchema.methods.refreshAuthToken = function(token) {
  // Set the token expiration to one week
  // and refresh the token every time the user
  // opens the **web application** and every one hour.

  // If a user doesn't open the **application** for more than a week,
  // they will have to login again
  // and this is acceptable **web application** UX.

  const refreshed = jwt.sign({
    sub: token.sub, // subject
    role: token.role,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // expires in 1 week
    iat: token.iat // Creation time
  }, config.get('jwtPrivateKey'))

  return refreshed
}

/**
 * Define User model
 */
const User = mongoose.model('User', userSchema)

// TODO: Finish validation based on model

const validate = {
  /**
   * Validate a user to create
   */
  create: function (user) {
    const schema = Joi.object({
      email: Joi.string().trim().min(5).max(255).required().email(),
      password: Joi.string().min(12).max(255).required(),
      role: Joi.string().valid('admin', 'user').required().min(4).max(5)
    })

    return schema.validate(user)
  },
  /**
   * Validate a user to update
   */
  update: function (user) {
    const schema = Joi.object({
      email: Joi.string().trim().min(5).max(255).email(),
      password: Joi.string().min(12).max(255),
      role: Joi.string().valid('admin', 'user').min(4).max(5)
    }).or('email', 'password', 'role')

    return schema.validate(user)
  },
  /**
   * Validate a user's password with additional requirements
   */
  password: function (user) {
    const complexityOptions = {
      min: 12,
      max: 255,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
      symbol: 1,
      requirementCount: 4
    }

    return passwordComplexity(complexityOptions).validate(user.password)
  },
  /**
   * Validate a user's email and password for authentication
   */
  auth: function (user) {
    const schema = Joi.object({
      email: Joi.string().trim().min(5).max(255).required().email(),
      password: Joi.string().min(12).max(255).required().valid(validate.password(user).value)
    })

    return schema.validate(user)
  }
}

exports.User = User
exports.validate = validate
