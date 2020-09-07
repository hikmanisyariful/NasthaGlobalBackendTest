'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MataKuliah.belongsToMany(models.Mahasiswa, { through: models.DataNilai })
    }
  };
  MataKuliah.init({
    name: DataTypes.STRING
  }, {
      sequelize,
      modelName: 'MataKuliah',
    });
  return MataKuliah;
};