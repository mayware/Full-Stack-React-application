const express = require('express');
const {
    getStoreProducts,
    getProduct,
    addProduct,
} = require('../controllers/productController')

const router = express.Router();

/////////// inside a main store component ///////////


// to get all the products from the shop
router.get('/', getStoreProducts)

// to get a single product
router.get('/:id', getProduct)

// to add a product into the shopping cart
router.post('/', addProduct)


module.exports = router