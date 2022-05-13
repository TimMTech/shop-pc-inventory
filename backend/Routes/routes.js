const express = require('express')
const router = express.Router()
const categoryTemplate = require('../Models/categoryTemplate.js')
const manufacturerTemplate = require('../Models/manufacturerTemplate.js')
const partsTemplate = require('../Models/partsTemplate.js')

router.get('/category', (req, res) => {
    const categories = categoryTemplate.find()
    categories
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.get('/manufacturer', (req, res) => {
    const manufacturer = manufacturerTemplate.find()
    manufacturer
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.get('/parts', (req, res) => {
    const parts = partsTemplate.find()
    parts
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.post("/category", (req, res) => {
    const newCategory = new categoryTemplate({
        title: req.body.title,
        description: req.body.description,
    })
    newCategory
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.post("/manufacturer", (req, res) => {
    const newManufacturer = new manufacturerTemplate({
        title: req.body.title,
        description: req.body.description
    })
    newManufacturer
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.post("/parts", (req, res) => {
    const newPart = new partsTemplate({
        title: req.body.title,
        cost: req.body.cost,
        quantity: req.body.quantity,
        description: req.body.description,
        category: req.body.category,
        manufacturer: req.body.manufacturer
    })
    newPart
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})



module.exports = router;
