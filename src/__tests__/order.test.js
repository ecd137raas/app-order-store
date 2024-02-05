const axios = require('axios')


test('Shold a save order', async function(){
    const data = {
        id:5,
        orderid: 'm12345',
        status: 1,
        store: 1,
        date: '03-02-2024 11:58:00'
    }

    const response = await axios.post('http://localhost:3000/order', data)
    const order = response.data

});

test('Shold a get orders', async function(){

    const response = await axios.get('http://localhost:3000/orders')
    const order = response.data
    console.log(response)
    expect(response.orderid).toBe(order.orderid)
})