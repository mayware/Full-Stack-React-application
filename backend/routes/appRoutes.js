const express = require('express');
const Product = require('../models/productModel')
const router = express.Router()

// landing page
router.get('/', (req, res) => {
    res.json({ mssg: 'Entering the landing page and get all items' })
})

// to get a single item
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Selected item from the store' })
})

// Add an item to the shopping cart
router.post('/', async (req, res) => {
    const { title, price, description, image } = req.body

    try {
        const product = await Product.create({ title, price, description, image })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Delete an item from the shopping cart
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete an item from the shopping cart' })
})

// To update an item in the shopping cart (change the quantity)
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update an item in the shopping cart' })
})





module.exports = router