const express = require('express')
const router = express.Router()
const DataNilaiController = require('../controller/datanilaiController')

router.post('/', DataNilaiController.create)
router.get('/:id', DataNilaiController.findOne)
router.put('/:id', DataNilaiController.update)
router.delete('/:id', DataNilaiController.delete)

module.exports = router