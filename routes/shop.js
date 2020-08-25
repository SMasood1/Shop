const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/", shopController.getProducts);
router.post("/cart", isAuth, shopController.postCart);
router.get("/cart", isAuth, shopController.getCart);
router.delete("/delete-cart-item/:productId", isAuth, shopController.deleteProduct);

// router.get('/orders', shopController.getOrders);
// router.get('/orders', shopController.getCheckout);

module.exports = router;
