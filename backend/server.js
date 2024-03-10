require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const appRoutes = require('./routes/appRoutes');

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/shop', appRoutes);

// connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listeing for the requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to the db & listening on port:", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
