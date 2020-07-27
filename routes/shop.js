const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);
// router.get('/cart', shopController.getCart);
// router.get('/orders', shopController.getOrders);
// router.get('/orders', shopController.getCheckout);

module.exports = router;