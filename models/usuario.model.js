"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      this.hasMany(models.H_Alojamientos, {
        as: "usuario",
        foreignKey: "id_usuario",
      })
      this.belongsToMany(models.H_Anuncios, {
        as: "favoritos",
        through: "H_Usuarios_Anuncios",
        foreignKey: "id_usuario",
        otherKey: "id_anuncio",
      })
      this.hasMany(models.H_Comentarios, {
        as: "comentarios",
        foreignKey: "id_usuario",
      })
      this.hasMany(models.H_Reservas, {
        as: "reservas",
        foreignKey: "id_usuario",
      })
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      correo: DataTypes.STRING,
      contraseña: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATE,
      direccion: DataTypes.STRING,
      imagen: DataTypes.BLOB,
      DNI: DataTypes.STRING,
      sexo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "H_Usuarios",
    }
  )
  return Usuario
}
