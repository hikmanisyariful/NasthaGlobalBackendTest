const express = require('express')
const router = express.Router()
const MataKuliahController = require('../controller/mataKuliahController')

router.get('/:idMahasiswa', MataKuliahController.findAverage)


module.exports = router