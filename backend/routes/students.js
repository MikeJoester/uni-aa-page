const router = require('express').Router()
let Student = require('../models/student.model')
let Classroom = require('../models/class.model')
let Major = require('../models/major.model')

// GET ALL STUDENTS
router.get("/", async (req, res) => {
    try {
        const students = await Student.find()
        //const students = await Classroom.findOneAndUpdate(Student.class, Classroom.students.push(Student.student_id))
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

// GET STUDENT BY EMAIL
router.get("/studentEmail/:email", async (req, res) => {
    try {
        const student = await Student.find({ email: req.params.email })
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
        const updateClassroom = await Classroom.findOneAndUpdate({_id: newStudent.class}, {$push: { students: newStudent._id}})
        res.status(200).json(savedStudent)

        return
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