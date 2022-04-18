const { Router } = require('express')
const router = Router()

const {
  getAllUser,
  getOneUser,
  newPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/index')

router.get('/', getAllUser)

router.get('/:id', getOneUser)

router.post('/',newPerson)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

module.exports = router