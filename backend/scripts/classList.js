const router = require('express').Router()
let Classroom = require('../models/class.model')
let students = require('../models/student.model')

router.get("/", async (req, res) => {
    try {
        const classes = await students
        .find()
        .populate("class", "class_name")
        res.status(200).json(classes)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router