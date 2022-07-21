const router = require('express').Router()
let Student = require('../models/student.model')

// GET ALL STUDENTS
router.get("/", async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET STUDENT BY ID
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.status(200).json(student)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE STUDENT
router.post("/", async (req, res) => {
    const newStudent = new Student(req.body)
    try {
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE STUDENT
router.patch("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(student)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE STUDENT
router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id)
        res.status(200).json(student)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router