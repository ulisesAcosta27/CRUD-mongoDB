const mongoose = require('mongoose')
const Express = require('express')
const morgan = require('morgan')
const express = require('express')
const indexRouter = require('./routes/index')

const app = Express()

//Middleware
require('dotenv').config();
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Conxion MongoDB
mongoose.connect(process.env.SECRET_KEY)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.log(error))

//Routes
app.use(indexRouter)

app.listen(4000)
console.log('Server is running')