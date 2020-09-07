const { MataKuliah, Mahasiswa, DataNilai } = require("../models")

class MataKuliahController {
  static findAverage(req, res, next) {
    let id = +req.params.idMahasiswa
    let payload = {
      id_mahasiswa: req.params.idMahasiswa,
      nama: "",
      mata_kuliah_yg_diambil: [],
      nilai_average: null
    }
    DataNilai.findAll({
      where: {
        MahasiswaId: id
      }
    })
      .then(data => {
        // res.status(200).json(data)
        console.log(data)
        let total_nilai = 0
        for (let i = 0; i < data.length; i++) {
          console.log(data[i])
          total_nilai += data[i].nilai
          let perMatkul = {
            mata_kuliah: data[i].MataKuliahId,
            nilai: data[i].nilai
          }
          payload.mata_kuliah_yg_diambil.push(perMatkul)
        }
        payload.nilai_average = total_nilai / data.length
        console.log(payload)
        return Mahasiswa.findByPk(payload.id_mahasiswa)
      })
      .then(data => {
        payload.nama = data.nama
        res.status(200).json(payload)
      })
      .catch(next)
  }
}

module.exports = MataKuliahController