const { Persona } = require('../models/persons')

const getAllUser = async (req, res) => {
  const persona = await Persona.find()
  res.status(200).json(persona)
}

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const getOnePerson = await Persona.find({ id: id })
  res.status(200).json(getOnePerson)
}

const newPerson = async (req, res) => {
  const { nombre, apellido, id } = req.body
  const newPerson = await new Persona({ nombre, apellido, id })
  await newPerson.save()
  res.status(200).json(newPerson)
}
const updatePerson = async (req, res) => {
  const { id } = req.params
  const { nombre } = req.body
  const updatePerson = await Persona.updateOne(
    { id: id },
    { $set: { nombre: nombre } })
  res.status(200).json(updatePerson)
}
const deletePerson = async (req, res) => {
  const { id } = req.params
  const deletePerson = await Persona.deleteOne({ id: id })
  res.status(200).json({ msg: "Perona eliminada exitosamente", deletePerson })
}


module.exports = {
  getAllUser,
  getOneUser,
  newPerson,
  updatePerson,
  deletePerson,
}