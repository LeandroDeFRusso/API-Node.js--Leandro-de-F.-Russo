const sequelize = require('sequelize')
const config = require('../Config/database')

const Endereco = require('../models/endereco')

const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

MediaSourceHandle.exports = connection