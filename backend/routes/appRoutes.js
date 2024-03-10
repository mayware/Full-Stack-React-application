const express = require('express');
const {
    getProducts,
    getProduct,
    addProduct,
} = require('../controllers/productController')

const router = express.Router();

// to get all products
router.get('/', getProducts)

// to get a single product
router.get('/:id', getProduct)

// to add a product into the shopping cart
router.post('/', addProduct)

// to delete a product from the shopping cart
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete an item from the shopping cart' })
})

// to update a product in the shopping cart (change the quantity)
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update an item in the shopping cart' })
})



module.exports = router