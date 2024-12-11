const express = require("express");
const router = require("../src/app/routes");
const notFound = require("../src/app/middlewares/notFound");
const globalErrorHandler = require("../src/app/middlewares/globalErrorhandler");
const config = require("../src/config");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);

app.use(notFound);

app.use(globalErrorHandler);

module.exports = app;
