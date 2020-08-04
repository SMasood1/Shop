const Product = require("../models/Product");
const Cart = require("../models/Cart");

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.status(200).send(products);
};
exports.postCart = (req, res) => {
  let item = req.body;
  Cart.addProduct(item);
  res.status(200).send();
};
exports.deleteProduct = (req, res, next)=>{
  let prodId = req.params.productId;
  Cart.deleteAProduct(prodId);
  res.status(200).send();
}
exports.getCart = (req, res) => {
  let cart = Cart.fetchAll();
  res.status(200).send(cart);
};
