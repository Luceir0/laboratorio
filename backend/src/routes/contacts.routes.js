const { Router } = require('express')
const router = Router()

//const { check } = require('express-validator')

const contactsController = require('../controllers/contacts.controller.js')

router.get('/', contactsController.getContacts)

router.get('/:id', contactsController.getContact)

router.post('/', contactsController.createContact)

router.put('/:id', contactsController.updateContact)

router.delete('/:id', contactsController.deleteContact)


module.exports = router