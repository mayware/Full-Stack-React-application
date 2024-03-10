require('dotenv').config()
const express = require('express');
const appRoutes = require('./routes/appRoutes');

const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/shop', appRoutes)

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})