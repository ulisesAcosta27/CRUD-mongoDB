const { Persona } = require('../models/persons')
const bcrypt = require('bcrypt')

const getAllUser = async (req, res) => {
  try {
    const persona = await Persona.find()
    res.status(200).json(persona)
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getOnePerson = await Persona.find({ id: id })
    res.status(200).json(getOnePerson)
  } catch (error) {
    res.status(404).json({
      error: error
    })
  }
}

const newPerson = async (req, res) => {
  const { nombre, apellido, id, contraseña } = req.body
  const pito = saltRounds = 10
  bcrypt.hashSync(contraseña, saltRounds);
  try {
    const newPerson = await new Persona({ nombre, apellido, id, pito })
    await newPerson.save()
    res.status(200).json(newPerson)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updatePerson = async (req, res) => {
  const { id } = req.params
  const { nombre } = req.body
  try {
    const existeId = await Persona.find({ id })
    if (!existeId) {
      return res.status(400).json({ error: 'usuario no existente' })
    }
    const updatePerson = await Persona.updateOne(
      { id: id },
      { $set: { nombre: nombre } })
    res.status(200).json(updatePerson)
  } catch (error) {

  }
}
const deletePerson = async (req, res) => {
  const { id } = req.params
  try {
    const deletePerson = await Persona.findOneAndDelete({ id: id })
    res.status(200).json({ msg: "Persona eliminada exitosamente", deletePerson })
  } catch (error) {
    return res.status(400).json(error)
  }
}


module.exports = {
  getAllUser,
  getOneUser,
  newPerson,
  updatePerson,
  deletePerson,
}