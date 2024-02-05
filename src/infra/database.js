const postgree = require('pg-promise')()

const db = postgree({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'postgres'

})

module.exports = db;
