const router = require('express').Router()
const handlers = require('../handlers/auth')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // 10 requests
})

router.post('/', limiter, handlers.authenticateUser)

module.exports = router
