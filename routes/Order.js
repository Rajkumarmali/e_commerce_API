const express = require('express');
const { orderController } = require('../controller/OrderController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create-order/:seller_id', authMiddleware, orderController)


module.exports = router;