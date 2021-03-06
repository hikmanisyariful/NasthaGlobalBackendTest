'use strict';
// const fs = require('fs')

// const data = fs.readFileSync('./dataMahasiswa.csv', 'utf8')
// let data1 = data.split('\n');
// let data_mahasiswa = []
// for (let i = 0; i < data1.length; i++) {
//   let datax = data1[i].split(';');
//   let dataPerson = {
//     nama: datax[1],
//     alamat: datax[2],
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }
//   data_mahasiswa.push(dataPerson)
// }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mahasiswas', [{
      nama: "Tamara Zulaika",
      alamat: "Depok"
    }, {
      nama: "Anna Aulia",
      alamat: "Malang"
    }, {
      nama: "Rizki Septian",
      alamat: "Mojokerto"
    }, {
      nama: "Galih Prakoso",
      alamat: "Jombang"
    }, {
      nama: "Himawan Auladana",
      alamat: "Gresik"
    }, {
      nama: "Ahmad Rifai",
      alamat: "Bekasi"
    }, {
      nama: "Dedi Sukarno",
      alamat: "cilacap"
    }], {})

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mahasiswas', null, {})
  }
};
