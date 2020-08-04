const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);
router.post('/cart', shopController.postCart);
router.get('/cart', shopController.getCart);
router.delete('/delete-cart-item/:productId', shopController.deleteProduct);

// router.get('/orders', shopController.getOrders);
// router.get('/orders', shopController.getCheckout);

module.exports = router;