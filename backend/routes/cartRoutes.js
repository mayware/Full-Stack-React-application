const express = require('express');
const {
    getCartProducts,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

const router = express.Router();

/////////// Inside a shopping cart component ///////////


// to get cart products
router.get('/cart', getCartProducts)

// to delete a product from the shopping cart
router.delete('/:id', deleteProduct)

// to update a product in the shopping cart (change the quantity)
router.patch('/:id', updateProduct)


module.exports = router