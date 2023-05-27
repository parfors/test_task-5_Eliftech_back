const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const productsRouter = require("./routes/api/products");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
