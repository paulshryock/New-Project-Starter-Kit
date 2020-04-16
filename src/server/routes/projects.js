const router = require('express').Router()
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const handlers = require('../handlers/projects')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60 // 60 requests
})

const strictLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // 10 requests
})

router.get('/', limiter, handlers.getProjects)
router.post('/', [auth, admin, strictLimiter], handlers.createProject)

router.get('/:id', limiter, handlers.getProject)
router.put('/:id', [auth, admin, strictLimiter], handlers.updateProject)
router.delete('/:id', [auth, admin, strictLimiter], handlers.deleteProject)

module.exports = router
