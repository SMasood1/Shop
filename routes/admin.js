const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");

router.post("/add-product", isAuth, adminController.postAddProduct);
router.delete(
  "/delete-product/:productId",
  isAuth,
  adminController.deleteProduct
);
router.patch(
  "/edit-product/:productId",
  isAuth,
  adminController.patchEditProduct
);

module.exports = router;
