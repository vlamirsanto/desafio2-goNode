module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'desafio2-node',
  operatorsAliases: false, // Removido da v5 do Sequelize
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
