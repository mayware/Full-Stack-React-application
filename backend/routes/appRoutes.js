const express = require('express');
const {
    getCartProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

const router = express.Router();

//////////////////////////////////////////////
// inside a main store component//
// to get all the products from the shop
router.get('/', (req, res) => {
    res.json({ mssg: 'Getting all the products from the shop' })
})

// to get a single product
router.get('/:id', getProduct)

// to add a product into the shopping cart
router.post('/', addProduct)

//////////////////////////////////////////////
// Inside a shopping cart component//
// to get cart products
router.get('/cart', getCartProducts)

// to delete a product from the shopping cart
router.delete('/:id', deleteProduct)

// to update a product in the shopping cart (change the quantity)
router.patch('/:id', updateProduct)



module.exports = router