const { MataKuliah, Mahasiswa } = require("../models")

class MataKuliahController {
  static findAverage(req, res, next) {
    let id = req.params.idMahasiswa
    MataKuliah.findAll({
      where: {
        id: id
      },
      include: [Mahasiswa]
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = MataKuliahController