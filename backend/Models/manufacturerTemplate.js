const mongoose = require('mongoose')

const manufacturerTemplate = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('manufacturers', manufacturerTemplate)