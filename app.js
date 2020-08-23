require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const CartItem = require("./models/Cart-Item");
const Order = require("./models/Order");
const OrderItem = require("./models/Order-Item");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.json({ strict: true }));

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  .sync()
  .then(() => {
    app.listen(8000);
  })
  .catch((error) => console.log(error));
