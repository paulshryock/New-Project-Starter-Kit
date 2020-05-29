const { log } = require('../modules/logger')
const jwt = require('jsonwebtoken')
const config = require('config')
const debug = require('debug')('api:auth')

module.exports = function (req, res, next) {
  // Check headers
  const origin = req.header('origin')
  const referrer = req.header('referrer')
  const url = config.get('app.url')

  // If origin or referrer doesn't match, deny access
  if (
    (origin && !origin.includes(url)) ||
    (referrer && !referrer.includes(url))
  ) {
    log.error('Access denied. Seems like a CSRF attack.', { status: 400 })
    return res
      .status(400)
      .send('Access denied. Seems like a CSRF attack.')
  }

  // Check cookie
  const token = req.cookies['x-auth-token']

  // If no token, deny access
  if (!token) {
    log.error('Access denied. No token provided.', { status: 401 })
    return res
      .status(401)
      .send('Access denied. No token provided.')
  }

  try {
    // Decode and verify the token signature
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
    const isExpired = Date.now() > decoded.exp

    // If token is expired, deny access
    if (isExpired) {
      log.error('Access denied. Token is expired.', { status: 401 })
      return res
        .status(401)
        .send('Access denied. Token is expired.')
    }

    // Set user to decoded token and continue
    req.user = decoded
    next()
  }

  catch (ex) {
    log.error('Invalid token.', { status: 400 })
    return res.status(400).send('Invalid token.')
  }
}