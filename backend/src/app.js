const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port', 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(require('./routes/contacts.routes'))
app.use('/api/contacts', require('./routes/contacts.routes'))

module.exports = app;