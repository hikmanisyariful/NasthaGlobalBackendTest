const express = require('express')
const router = express.Router()
const MahasiswaController = require('../controller/mahasiswaController')

router.get('/recovery', MahasiswaController.recovery)

module.exports = router