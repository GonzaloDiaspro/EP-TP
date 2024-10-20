'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsToMany(models.Componentes, {through: 'Producto_Componente'}),
      Productos.belongsToMany(models.Fabricantes, {through: 'Producto_Fabricante'})
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.FLOAT,
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};