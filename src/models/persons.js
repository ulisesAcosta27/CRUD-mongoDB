const { Schema, model } = require('mongoose')

const personaSchema = new Schema({
  nombre: String,
  apellido: String,
  id: Number
})

const Persona = model('Persona', personaSchema)

module.exports = {
  Persona
} 