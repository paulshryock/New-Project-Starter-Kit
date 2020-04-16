const router = require('express').Router()
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const handlers = require('../handlers/users')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // 10 requests
})

router.get('/', [auth, admin, limiter], handlers.getUsers)
router.post('/', [auth, admin, limiter], handlers.createUser)

router.get('/me', [auth, limiter], handlers.getCurrentUser)
router.put('/me', [auth, limiter], handlers.updateCurrentUser)
router.delete('/me', [auth, limiter], handlers.deleteCurrentUser)

router.get('/:id', [auth, admin, limiter], handlers.getUser)
router.put('/:id', [auth, admin, limiter], handlers.updateUser)
router.delete('/:id', [auth, admin, limiter], handlers.deleteUser)

module.exports = router
