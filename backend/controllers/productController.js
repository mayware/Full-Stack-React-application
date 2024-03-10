const Product = require('../models/productModel');
const mongoose = require('mongoose');

// get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}
// get a single product
const getProduct = async (req, res) => {
    const { id } = req.params; // gets the product's id from the URL
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product);
}

// add a product to a shopping cart

const addProduct = async (req, res) => {
    const { title, price, description, rating, image } = req.body

    // adding a product document to db to display in the cart
    try {
        const product = await Product.create({ title, price, description, rating, image })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a product from the shopping cart

// update a product

module.exports = {
    getProducts,
    getProduct,
    addProduct
}