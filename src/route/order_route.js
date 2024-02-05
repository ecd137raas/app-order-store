const express = require('express')
const router = express.Router()
const orderService = require('../services/order_services')


router.get('/orders', async function (req, res) {
    const response = await orderService.getOrders()
    res.render('index', {res: response})
})

router.post('/order', async function (req, res) {
    const data = req.body;
    const response = await orderService.saveOrder(data)
    res.json(response)
})

router.post('/order/:id', async function (req, res) {
    const data = req.body;
    const response = await orderService.updateOrder(req.params.id, data)
    res.json(response)
})

module.exports = router