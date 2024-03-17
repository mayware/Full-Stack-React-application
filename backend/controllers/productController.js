const Product = require('../models/productModel');
const mongoose = require('mongoose');

/////////// Main store ///////////

// get all the products in the main store
const getStoreProducts = async (req, res) => {
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
    const { title, price, description, rating, quantity, image } = req.body

    // adding a product document to db to display in the cart
    try {
        const product = await Product.create({ title, price, description, rating, quantity, image })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}




/////////// Shopping cart ///////////

// get all products in the shopping cart
const getCartProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}

// delete a product from the shopping cart
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }
    const product = await Product.findOneAndDelete({ _id: id })
    // checks whether the id property of the document is equal to a url param id

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product);
}

// update a product in a shopping cart
const updateProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }

    const product = await Product.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product)
}

module.exports = {
    getCartProducts,
    getStoreProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}