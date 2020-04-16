const router = require('express').Router()
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const handlers = require('../handlers/testimonials')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60 // 60 requests
})

const strictLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // 10 requests
})

router.get('/', limiter, handlers.getTestimonials)
router.post('/', [auth, admin, strictLimiter], handlers.createTestimonial)

router.get('/:id', limiter, handlers.getTestimonial)
router.put('/:id', [auth, admin, strictLimiter], handlers.updateTestimonial)
router.delete('/:id', [auth, admin, strictLimiter], handlers.deleteTestimonial)

module.exports = router
