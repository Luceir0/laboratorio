const contactsController = {}
const contact = require('../models/Contact')
const Contact = require('../models/Contact')

contactsController.getContacts = async (req, res) => {
    try{
        const contacts = await contact.find()
        res.json(contacts)
    }catch(err) {
        res.send('Error: ' + err)
    }
}

contactsController.getContact = async (req, res) => {
    try{
        const contact = await contact.findById(req.params.id)
        res.json(contact)
    }catch(err) {
        res.send('Error: ' + err)
    }
}

contactsController.createContact = async (req, res) => {
    try{
        const newContact = new Contact(req.body)
        await newContact.save()
        res.json({ message: 'A new contact has been added to the list' })
    }catch(err) {
        res.send('Error: ' + err)
    }
}

contactsController.updateContact = async (req, res) => {
    try{
        await contact.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'A contact has been updated' })
    }catch(err) {
        res.send('Error: ' + err)
    }
}

contactsController.deleteContact = async (req, res) => {
    try{
        await contact.findByIdAndDelete(req.params.id)
        res.json({ message: 'This contact has been deleted' })
    }catch(err) {
        res.send('Error: ' + err)
    }
}

module.exports = contactsController