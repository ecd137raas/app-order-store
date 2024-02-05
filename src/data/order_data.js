const database = require('../infra/database')

exports.getOrders = () => {
    return database.query('select o.orderid as order, s.name as status from orders o, status s where o.status = s.id')
};

exports.saveOrder = (data) => {
    return database.one('insert into orders (orderid, status, store, datestart) values ($1, $2, $3, $4) returning * ', [ data.orderid, data.status, data.store, data.datestart])
};

exports.updateOrder = (id, data) => {
    return database.oneOrNone('update orders set status=$1, datefinish=$2 where orderid=$3 returning * ', [data.status, data.datefinish, id])
};
