const router = require('express').Router()
let Major = require('../models/major.model')

// GET ALL MAJORS
router.get("/", async (req, res) => {
    try {
        const majors = await Major.find()
        res.status(200).json(majors)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET MAJOR BY ID
router.get("/:id", async (req, res) => {
    try {
        const major = await Major.findById(req.params.id).populate('classes')
        res.status(200).json(major)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE MAJOR
router.post("/", async (req, res) => {
    const newMajor = new Major(req.body)
    try {
        const savedMajor = await newMajor.save()
        res.status(200).json(savedMajor)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE MAJOR
router.patch("/:id", async (req, res) => {
    try {
        const major = await Major.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(major)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE MAJOR
router.delete("/:id", async (req, res) => {
    try {
        const major = await Major.findByIdAndDelete(req.params.id)
        res.status(200).json(major)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router