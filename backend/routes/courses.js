const router = require('express').Router()
let Course = require('../models/course.model')

// GET ALL COURSES
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET COURSE BY ID
router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        res.status(200).json(course)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE COURSE
router.post("/", async (req, res) => {
    const newCourse = new Course(req.body)
    try {
        const savedCourse = await newCourse.save()
        res.status(200).json(savedCourse)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE COURSE
router.patch("/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(course)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE COURSE
router.delete("/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        res.status(200).json(course)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router