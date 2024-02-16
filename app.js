const express = require("express");
const path = require("path");
const db = require("./data/database");
const errorHandlerMiddleware = require('./middlewares/error-handler');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');
const cartMiddleware = require('./middlewares/cart');
const updateCartPricesMiddleware = require('./middlewares/update-cart-prices');
const notFoundMiddleware = require('./middlewares/not-found');
const createSessionConfig = require('./config/sessions');

const mongodb = require("mongodb");

const expressSession = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const authRoutes = require("./routes/auth.routes");
const productRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('./routes/orders.routes');



app.use(express.static("public"));
app.use('/products/assets', express.static('product-data'))
app.use(express.urlencoded({ extended: false }));//only supports regular form submission
app.use(express.json());
const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(cartMiddleware);
app.use(updateCartPricesMiddleware);

app.use(checkAuthStatusMiddleware)

app.use(baseRoutes);
app.use('/cart',cartRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use('/orders', protectRoutesMiddleware, ordersRoutes);
app.use('/admin', protectRoutesMiddleware, adminRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () { 
  app.listen(3000);
  })
  .catch(function (error) {
  console.log('Could not connect to Database')
});
