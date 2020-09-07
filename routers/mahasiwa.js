const express = require('express')
const router = express.Router()
const MahasiswaController = require('../controller/mahasiswaController')

router.post('/', MahasiswaController.create)
router.put('/:id', MahasiswaController.update)

module.exports = router