'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.belongsToMany(models.MataKuliah, { through: models.DataNilai })
    }
  };
  Mahasiswa.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'Mahasiswa',
    });
  return Mahasiswa;
};