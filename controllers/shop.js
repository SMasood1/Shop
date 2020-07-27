const Product = require('../models/Product');

exports.getProducts = (req, res)=>{
    const products = Product.fetchAll();
    res.status(200).send(products);
}

