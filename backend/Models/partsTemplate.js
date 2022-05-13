const mongoose = require('mongoose')

const partsTemplate = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('parts', partsTemplate)