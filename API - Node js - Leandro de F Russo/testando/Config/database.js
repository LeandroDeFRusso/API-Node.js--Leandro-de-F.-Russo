const { default: ModelManager } = require("sequelize/types/model-manager");

ModelManager.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'usuario',
    password: 'senha',
    database: 'apinode',
    define: {
        timestamps: true,
        underscored: true
    }
}