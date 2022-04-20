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
    const { password } = req.params;
    const getOnePerson = await Persona.findOne({ password: password })
    if(getOnePerson == null){
      return res.status(400).json({error: 'Usuario no encontrado'})
    }
    res.status(200).json(getOnePerson)
  } catch (error) {
    res.status(404).json({
      error: error
    })
  }
}

const newPerson = async (req, res) => {
  const { nombre, apellido, email, password } = req.body
  try {
    if([nombre, apellido, email, password].includes('')){
      return res.status(400).json({error: 'Por favor ingrese todos los campos'})
    }
    const newPerson = await new Persona({ nombre, apellido, email, password })
    await newPerson.save()
    res.status(200).json(newPerson)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const IniciarPerson = (req, res) =>{
  const { email, password } = req.body
  try {
    console.log({email, password})
    res.status(200).json({msg: 'Sing in'})
  } catch (error) {
    res.status(200).json({msg: error})
  }
}

const updatePerson = async (req, res) => {
  const { password } = req.params
  const { nombre } = req.body
  try {
    const existepassword = await Persona.find({ password })
    if (existepassword == null) {
      return res.status(400).json({ error: 'usuario no existente' })
    }
    const updatePerson = await Persona.updateOne(
      { password },
      { $set: { nombre: nombre } })
    res.status(200).json(updatePerson)
  } catch (error) {

  }
}
const deletePerson = async (req, res) => {
  const { password } = req.params
  try {
    const getOnePerson = await Persona.findOne({ password })
    if(getOnePerson == null){
      return res.status(400).json({error: 'Usuario no encontrado'})
    }
    const deletePerson = await Persona.deleteOne({ password })
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
  IniciarPerson,
}