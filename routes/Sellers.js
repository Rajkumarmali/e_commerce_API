const express = require('express');
const { sellerController } = require('../controller/SellersController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/list-of-seller', authMiddleware, sellerController)

module.exports = router;