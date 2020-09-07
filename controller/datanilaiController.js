const { DataNilai, Mahasiswa, MataKuliah } = require("../models")

class DataNilaiController {
  static create(req, res, next) {
    let payload = {
      MahasiswaId: req.body.mahasiswaId,
      MataKuliahId: req.body.mataKuliahId,
      nilai: req.body.nilai,
      keterangan: req.body.keterangan
    }
    DataNilai.create(payload)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(next)
  }

  static update(req, res, next) {
    let id = req.params.id
    let payload = {
      MahasiswaId: req.body.mahasiswaId,
      MataKuliahId: req.body.mataKuliahId,
      nilai: req.body.nilai,
      keterangan: req.body.keterangan
    }
    DataNilai.update(payload, {
      where: {
        id: id
      },
      returning: true
    })
      .then(data => {
        res.status(200).json({
          data: data,
          message: 'Data berhasil di update'
        })
      })
      .catch(next)
  }

  static delete(req, res, next) {
    let id = req.params.id
    DataNilai.destroy({
      where: {
        id: id
      }
    })
      .then(data => {
        res.status(200).json(data[1][0])
      })
      .catch(next)
  }

  static findOne(req, res, next) {
    let id = req.params.id
    DataNilai.findOne({
      where: {
        id: id
      },
      include: [Mahasiswa, MataKuliah]
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = DataNilaiController