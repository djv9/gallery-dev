const express = require('express')
const app = express()
app.use('/', (req, res) => {
    res.send('Hello world!')
})
app.listen(3000, () => {
    console.log('app listening on port 3000.')
})
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db1')
const index = require('./views/index')

const cors = require('cors')
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization']
}));
app.use('/index', index)