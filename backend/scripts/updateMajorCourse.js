const router = require('express').Router()
let Course = require('../models/course.model')
let Major = require('../models/major.model')

const majorId = "62d6771e6feba6c049758709"

router.post("/:id", async (req, res) => {
    try {   
        const updated = await Major.findOneAndUpdate({_id: majorId}, {$push: { courses: req.params.id}})
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const getCourseName = await Major.findById(req.params.id).populate("courses")
        res.status(200).json(getCourseName)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router