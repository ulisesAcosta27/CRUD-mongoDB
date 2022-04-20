const { Router } = require('express')
const passport = require('passport')
// const { check } = require('express-validator')
const router = Router()
const {
  getAllUser,
  getOneUser,
  newPerson,
  updatePerson,
  deletePerson,
  IniciarPerson,
} = require('../controllers/index')
// const { validarCampos } = require('../middleware/validarCampos')
// const { idExiste } = require('../middleware/db-validator')

router.get('/home', getAllUser)

router.get('/:password', getOneUser)

router.post('/register',newPerson)

router.post('/iniciar' ,passport.authenticate('local', {
  failureRedirect: '/register',
  successMessage: '/home'
})  ,IniciarPerson)


router.put('/:password', updatePerson)

router.delete('/:password', deletePerson)

module.exports = router

/*
[
  check('nombre', 'Tu nombre debe tener como minimo 4 caracteres').isLength({ min: 3 }),
  check('email').custom(idExiste),
  validarCampos
]

*/