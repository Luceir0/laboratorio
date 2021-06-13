const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

module.exports = model('Contact', contactSchema)