const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./data/users.json");
const db = lowdb(adapter);

exports.getUsers = () => {
    return db.get("users");
}

exports.addUser = user => db.get("users").push(user).write();
exports.findUser = uuid => db.get("users").find({uuid: uuid}).value()





