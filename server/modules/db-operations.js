const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./data/db.json");
const db = lowdb(adapter);

exports.getUsers = () => {
    return db.get("users");
}

exports.addUser = user => db.get("users").push(user).write();
exports.findUser = uuid => db.get("users").find({uuid: uuid}).value()

exports.getOrders = () => {
    return db.get("orders");
}

exports.addOrder = order => db.get("orders").push(order).write();

exports.getOrders = () => {
    return db.get("orders");
}

exports.addOrder = order => db.get("orders").push(order).write();

exports.findOrderByUser = uuid => db.get("orders").filter(order => order.userUuid === uuid)
exports.findOrderByUuid = uuid => db.get("orders").find({uuid: uuid}).value()




