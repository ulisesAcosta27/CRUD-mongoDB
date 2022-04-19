const { Persona } = require("../models/persons")

const idExiste = async (id = '') => {
  const existeId = await Persona.findOne({ id })
  if (existeId) {
    throw new Error(`el id ${id} ya existe`)
  }
  
}

module.exports = {
  idExiste
}