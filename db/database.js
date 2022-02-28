const {Sequelize} = require('sequelize')

const db = new Sequelize('usuariosdb', 'root', '', {
    host: 'localhost',
    dialect:   'mysql' /* | 'mariadb' | 'postgres' | 'mssql' */
  });

  module.exports= db;