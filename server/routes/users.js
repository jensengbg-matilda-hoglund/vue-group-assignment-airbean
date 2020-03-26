const { Router } = require("express");
const router = new Router();
const db = require("../modules/user-operations");

router.get("/", (req, res) => {
  res.send(db.getUsers());
});

router.get("/:uuid", (req, res) => {
  res.send(db.findUser(req.params.uuid));
});

router.post("/", (req, res) => {
  let body = req.body;
  let user = {
    uuid: body.uuid,
    name: body.name,
    email: body.email,
    orders: []
  };
  db.addUser(user);
  res.send(user);
});

module.exports = router;
