const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getToys, getToyById, addToy, updateToy, removeToy } = require('./toy.controller')
const router = express.Router()

// router.use(requireAuth)

router.get('/', getToys)
router.get('/:id', getToyById)
router.post('/', requireAuth, requireAdmin, addToy)
router.put('/:id', updateToy)
router.delete('/:id', requireAuth, requireAdmin, removeToy)

module.exports = router