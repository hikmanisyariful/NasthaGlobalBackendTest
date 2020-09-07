const { Mahasiswa } = require("../models")

class MahasiswaController {
  static create(req, res, next) {
    let payload = {
      nama: req.body.nama,
      alamat: req.body.alamat
    }
    Mahasiswa.create(payload)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(next)
  }

  static update(req, res, next) {
    let id = req.params.id
    let payload = {
      nama: req.body.nama,
      alamat: req.body.alamat
    }
    Mahasiswa.update(payload, {
      where: {
        id: id
      },
      returning: true
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = MahasiswaController