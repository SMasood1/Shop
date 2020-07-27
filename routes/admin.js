const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/add-product', adminController.postAddProduct);
router.delete('/delete-product/:productId', adminController.deleteProduct);
router.patch('/edit-product/:productId', adminController.patchEditProduct);

module.exports = router;