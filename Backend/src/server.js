const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/productsRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use(productsRouter);
app.use(cartRouter);

module.exports = app;
