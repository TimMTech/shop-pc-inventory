const mongoose = require('mongoose')

const categoryTemplate = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('categories', categoryTemplate)