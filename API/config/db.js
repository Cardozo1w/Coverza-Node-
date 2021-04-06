const Sequelize = require('sequelize');


const propiedadesModelo = require("../models/Propiedades");


const db = new Sequelize("coverza", "root", "root", {
  host: "localhost",
  port: "8889",
  dialect: "mysql",
  define: {
    timestamps: false,
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  operatorAliases: false,
});


const Propiedades = propiedadesModelo(db, Sequelize);

module.exports ={
  db,
  Propiedades
} 
