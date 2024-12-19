require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conntected to the database!");
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });

app.set("port", port);
const server = http.createServer(app);

const climbingRoutes = require("./serverRoutes/climbingRoutes.routes");

app.use("/test", (req, res, next) => {
  res.send("Hello from express!");
});

app.use("/", climbingRoutes);

server.listen(port);
console.log("Server is running at port " + port);
