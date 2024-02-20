require('dotenv').config()
const postgree = require('pg-promise')()

const db = postgree({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
})
module.exports = db;
