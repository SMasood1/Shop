const Product = require("../models/Product");

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.status(200).send(product);
};
exports.patchEditProduct = (req, res)=>{
  const prodId = req.params.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc
  );
  updatedProduct.save();
  res.status(200).send();
}
exports.deleteProduct = (req, res) => {
  console.log("Backend delete prod id", req.params.productId);
  const prodId = req.params.productId;
  Product.deleteById(prodId);
  res.status(200).send();
};
