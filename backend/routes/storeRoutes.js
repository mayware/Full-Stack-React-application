const express = require('express');
const {
    getAllStoreProducts,
    getStoreProduct,
} = require('../controllers/storeProductController')

const router = express.Router();

/////////// Main store component products ///////////
// to get all the products from the shop
router.get('/', getAllStoreProducts)

// to get a single product
router.get('/:id', getStoreProduct)


module.exports = router