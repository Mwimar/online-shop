const express = require("express");

const mongodb = require("mongodb");

const session = require("express-session");
const app = express();

const db = require("./data/database");

db.connectToDatabase().then(function () {
  app.listen(3000);
});
