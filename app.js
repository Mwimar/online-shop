const express = require("express");
const path = require("path");

const mongodb = require("mongodb");

const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const db = require("./data/database");
const authRoutes = require("./routes/auth.routes");

app.use(authRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
