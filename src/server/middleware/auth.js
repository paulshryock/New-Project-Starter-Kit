const { log } = require('../modules/logger')
const jwt = require('jsonwebtoken')
const config = require('config')
const debug = require('debug')('npsk:auth')

module.exports = function (req, res, next) {
  // Check headers
  const origin = req.header('origin')
  const referrer = req.header('referrer')
  const url = config.get('app.url')

  if (
    (origin && origin !== url) ||
    (referrer && referrer !== url)
  ) {
    log.error('Access denied. Seems like a CSRF attack.', { status: 400 })
    return res
      .status(400)
      .send('Access denied. Seems like a CSRF attack.')
  }

  // Check cookie
  const token = req.cookies['x-auth-token']

  if (!token) {
    log.error('Access denied. No token provided.', { status: 401 })
    return res
      .status(401)
      .send('Access denied. No token provided.')
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
    req.user = decoded
    next()
  }

  catch (ex) {
    log.error('Invalid token.', { status: 400 })
    return res.status(400).send('Invalid token.')
  }
}