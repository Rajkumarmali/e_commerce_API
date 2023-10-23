const express = require('express');
const { getCatalogController } = require('../controller/CatalogController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/seller-catalog/:seller_id', authMiddleware, getCatalogController)

module.exports = router;