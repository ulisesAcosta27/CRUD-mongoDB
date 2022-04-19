const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const {
  getAllUser,
  getOneUser,
  newPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/index')
const { validarCampos } = require('../middleware/validarCampos')
const { idExiste } = require('../middleware/db-validator')

router.get('/', getAllUser)

router.get('/:password', getOneUser)

router.post('/', [
  check('nombre', 'Tu nombre debe tener como minimo 4 caracteres').isLength({ min: 3 }),
  check('email').custom(idExiste),
  validarCampos
], newPerson)

router.put('/:password', updatePerson)

router.delete('/:password', deletePerson)

module.exports = router


// check('nombre', 'nombre ya registrado').isEmail
// ,