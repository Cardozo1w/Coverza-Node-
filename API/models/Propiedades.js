module.exports = (sequelize, type) => {
    return sequelize.define("propiedades", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      direccion: type.STRING,
      municipio: type.INTEGER,
      costo: type.INTEGER,
      precio: type.INTEGER,
      categoria: type.INTEGER,
      giro_comercial: type.INTEGER,
      descripcion: type.STRING

    });
  };


