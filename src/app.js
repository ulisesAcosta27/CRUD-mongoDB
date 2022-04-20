const mongoose = require('mongoose')
const Express = require('express')
const morgan = require('morgan')
const express = require('express')
const passport = require('passport')
const indexRouter = require('./routes/index')
const session = require('express-session') 

const app = Express()
require('./strategies/auth')

//Middleware
require('dotenv').config();
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

//Conxion MongoDB
mongoose.connect(process.env.SECRET_KEY)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.log(error))

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use(indexRouter)

app.listen(4000)
console.log('Server is running')