const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require ("body-parser");

const beansRouter = require("./routes/beans");
const usersRouter = require("./routes/users");
const ordersRouter = require("./routes/orders");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/beans", beansRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);


app.listen(5000, () => console.log(`Server started on port 5000`));
