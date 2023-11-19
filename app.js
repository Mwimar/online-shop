const express = require("express");
const path = require("path");
const db = require("./data/database");
const errorHandlerMiddleware = require('./middlewares/error-handler')
const createSessionConfig=require('./config/sessions')

const mongodb = require("mongodb");

const expressSession = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const authRoutes = require("./routes/auth.routes");
const productRoutes = require('./routes/products.routes');
const baseRoutes=require('./routes/base.routes')


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));//only supports regular form submission
const sessionConfig = createSessionConfig();
app.use(expressSession(sessionConfig))

app.use(baseRoutes);
app.use(authRoutes);
app.use(productRoutes)
app.use(errorHandlerMiddleware)

db.connectToDatabase()
  .then(function () { 
  app.listen(3000);
  })
  .catch(function (error) {
  console.log('Could not connect to Database')
});
