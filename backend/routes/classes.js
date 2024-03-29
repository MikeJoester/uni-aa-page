const router = require('express').Router()
let Classroom = require('../models/class.model')
let Major = require('../models/major.model')

// GET ALL CLASSES
router.get("/", async (req, res) => {
    try {
        const classes = await Classroom.find()
        res.status(200).json(classes)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET CLASS BY ID
router.get("/:id", async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id).populate('students')
        res.status(200).json(classroom)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE CLASS
router.post("/", async (req, res) => {
    const newClass = new Classroom(req.body)

    try {
        const savedClass = await newClass.save()
        const updateClassroomToMajor = await Major.findOneAndUpdate({ major_code: newClass.major }, { $push: { classes: newClass._id } })
        res.status(200).json(savedClass)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE CLASS
router.patch("/:id", async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(classroom)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE CLASS
router.delete("/:id", async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id)
        await Major.findOneAndUpdate({ major_code: req.params.major }, { $pull: { classes: req.params.id } })
        res.status(200).json(classroom)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router