const { log } = require('../modules/logger')
const { User, validate } = require('../models/user')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const app = require('express')()
const isProduction = app.get('env') === 'production'

module.exports = {
  /**
   * Authenticate a user
   */
  authenticateUser: async (req, res) => {
    {
      // Validate user
      const { error } = validate.auth(req.body)
      if (error) return res.status(400).send(error.details[0].message)
    }
    
    {
      // Validate password
      const { error } = validate.password(req.body)
      if (error) return res.status(400).send(error.details[0].message)
    }

    // Verify user exists
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
      log.info('Failed login attempt: Invalid email.', { user: req.body.email })
      return res.status(400).send('Invalid email or password')
    }

    // Verify correct password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      log.info('Failed login attempt: Invalid password.', { user: req.body.email })
      return res.status(400).send('Invalid email or password')
    }

    log.info('User logged in.', { user: _.pick(user, ['_id', 'email', 'role']) })

    // Generate auth token
    const token = user.generateAuthToken()

    // Return auth token to the client
    res
      // Set a cookie
      .cookie('x-auth-token', token, {
        httpOnly: isProduction,
        maxAge: 60 * 60 * 1000, // 1 hour
        // maxAge: 24 * 60 * 60 * 1000, // 1 day
        // maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        // path: '/',
        sameSite: isProduction,
        secure: isProduction,
      })
      // Send the response
      .send('Login successful.')
  }
}
