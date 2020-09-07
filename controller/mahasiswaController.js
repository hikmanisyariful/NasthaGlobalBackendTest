const { Mahasiswa } = require("../models")
const fs = require('fs')

class MahasiswaController {

  static recovery(req, res, next) {

    const data = fs.readFileSync('./dataMahasiswa.csv', 'utf8')
    let data1 = data.split('\n');
    let data_baru = []
    for (let i = 1; i < data1.length; i++) {
      let datax = data1[i].split(';');
      let dataPerson = {
        id: +datax[0],
        nama: datax[1],
        alamat: datax[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      data_baru.push(dataPerson)
    }

    let data_from_database = []

    let id_sama = []
    let data_mahasiswa_baru
    Mahasiswa.findAll()
      .then(data => {
        data_from_database.push(data)

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data_baru.length; j++) {
            if (data[i].id === data_baru[j].id) {
              id_sama.push(data_baru[j])
            }
          }
        }

        data_mahasiswa_baru = data_baru.filter(data => !id_sama.includes(data))

        let promises = []
        id_sama.forEach(mahasiswa => {
          const updatedData = Mahasiswa.update(mahasiswa, {
            where: {
              id: mahasiswa.id
            }
          })
          promises.push(updatedData)
        })
        return Promise.all(promises)
      })
      .then(data => {
        let promises = []
        data_mahasiswa_baru.forEach(mahasiswa => {
          const createData = Mahasiswa.create({
            nama: mahasiswa.nama,
            alamat: mahasiswa.alamat
          })
          promises.push(createData)
        })
        return Promise.all(promises)
      })
      .then(data => {
        res.status(201).json({
          message: "recovery database is successfully"
        })
      })
      .catch(next)
  }
}

module.exports = MahasiswaController