const express = require("express");
const path = require("path");
const db = require("./data/database");
const errorHandlerMiddleware=require('./middlewares/error-handler')

const mongodb = require("mongodb");

const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const authRoutes = require("./routes/auth.routes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));//only supports regular form submission

app.use(authRoutes);
app.use(errorHandlerMiddleware)

db.connectToDatabase()
  .then(function () {
  app.listen(3000);
  })
  .catch(function (error) {
  console.log('Could not connect to Database')
});
