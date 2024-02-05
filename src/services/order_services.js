const orderData = require('../data/order_data')

exports.getOrders = function () {
    return orderData.getOrders()
}

exports.saveOrder = function (data) {
    return orderData.saveOrder(data)
}

exports.updateOrder = function (id,data) {
    return orderData.updateOrder(id, data)
}
