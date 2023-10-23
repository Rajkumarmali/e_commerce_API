const express = require("express");
const { catalogController, getOrderController } = require("../controller/CatalogController");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create-catalog', authMiddleware, catalogController)
router.get('/orders', authMiddleware, getOrderController);

module.exports = router;