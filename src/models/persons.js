const { Schema, model } = require('mongoose')

const personaSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
})

const Persona = model('Persona', personaSchema)

module.exports = {
  Persona
} 