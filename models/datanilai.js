'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class DataNilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataNilai.init({
    MahasiswaId: DataTypes.INTEGER,
    MataKuliahId: DataTypes.INTEGER,
    nilai: DataTypes.FLOAT,
    keterangan: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'DataNilai',
    });
  return DataNilai;
};