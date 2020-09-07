const express = require('express')
const router = express.Router()
const datanilai = require('./datanilai')
const mataKuliah = require('./mataKuliah')
const mahasiswa = require('./mahasiwa')

router.get('/', function (req, res) {
  res.send('WELCOME')
})

router.use('/datanilai', datanilai)
router.use('/average', mataKuliah)
router.use('/mahasiswa', mahasiswa)

module.exports = router