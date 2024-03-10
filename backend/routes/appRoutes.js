const express = require('express')

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
router.post('/', (req, res) => {
    res.json({ mssg: 'Add an item to the cart' })
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