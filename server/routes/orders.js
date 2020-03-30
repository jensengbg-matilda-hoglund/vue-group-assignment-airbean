const { Router } = require("express");
const router = new Router();
const db = require("../modules/db-operations");

router.get("/", (req, res) => {
  res.send(db.getOrders());
});

router.get("/:uuid", (req, res) => {
  res.send(db.findOrderByUuid(req.params.uuid));
});


router.post("/", (req, res) => {
  let body = req.body;
  let order = {
    uuid: body.uuid,
    created: body.created,
    cart: body.cart,
    totalValue: body.totalValue,
    userUuid: body.userUuid
  };
  db.addOrder(order);
  res.send(order);
});

module.exports = router;
