const express = require('express')
const route = require('./src/route/order_route')

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(route);

module.exports = app;