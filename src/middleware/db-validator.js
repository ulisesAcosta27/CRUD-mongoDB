const { Persona } = require("../models/persons")

const idExiste = async (email = '') => {
  const existeId = await Persona.findOne({ email })
  if (existeId) {
    throw new Error(`el id ${email} ya existe`)
  }
  
}

module.exports = {
  idExiste
}