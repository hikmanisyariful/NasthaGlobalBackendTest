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

        res.status(200).json({
          message: "Data berhasil dihapus"
        })
      })
      .catch(next)
  }

  static findOne(req, res, next) {
    let id = req.params.id
    let payload = {
      IdMahasiswa: null,
      nama: "",
      mata_kuliah: "",
      nilai: 0
    }
    DataNilai.findOne({
      where: {
        id: id
      }
    })
      .then(data => {
        payload.nilai = data.nilai
        payload.IdMahasiswa = data.MahasiswaId
        return MataKuliah.findByPk(data.MataKuliahId)
      })
      .then(data => {
        payload.mata_kuliah = data.name
        return Mahasiswa.findByPk(payload.IdMahasiswa)
      })
      .then(data => {
        payload.nama = data.nama
        res.status(200).json(payload)
      })
      .catch(next)
  }
}

module.exports = DataNilaiController