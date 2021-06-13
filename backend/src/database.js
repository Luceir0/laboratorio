const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/contact-list', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false 
    })
    .then(database => console.log('Database is connected'))
    .catch(err => console.error(err))

module.exports = mongoose