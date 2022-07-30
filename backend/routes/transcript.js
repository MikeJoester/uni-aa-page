const router = require('express').Router()
let Student = require('../models/student.model')
let Transcript = require('../models/transcript.model')
const asyncHandler = require('express-async-handler')

// GET ALL TRANSCRIPT
router.get("/", async (req, res) => {
    try {
        const transcript = await Transcript.find()
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET TRANSCRIPT BY ID
router.get("/:id", async (req, res) => {
    try {
        const transcript = await Transcript.findById(req.params.id)
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET TRANSCRIPT BY EMAIL
router.get("/transcriptEmail/:email", async (req, res) => {
    try {
        const transcript = await Transcript.findOne({ student_email: req.params.email })
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE TRANSCRIPT
router.post("/", asyncHandler(async (req, res) => {
    const newTranscript = new Transcript(req.body)
    try {
        const savedTranscript = await newTranscript.save()
        res.status(200).json(savedTranscript)
    } catch (err) {
        res.status(500).json(err)
    }
}))

// UPDATE TRANSCRIPT BY EMAIL
router.patch("/:email", async (req, res) => {
    try {
        const transcript = await Transcript.findOneAndUpdate({ student_email: req.params.email }, { grades: req.body.grades })
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE TRANSCRIPT BY EMAIL
router.delete("/:email", async (req, res) => {
    try {
        const transcript = await Transcript.findOneAndUpdate({ student_email: req.params.email })
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE TRANSCRIPT BY ID
router.patch("/:id", async (req, res) => {
    try {
        const transcript = await Transcript.findByIdAndUpdate(req.params.id, { grades: req.body.grades })
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE TRANSCRIPT BY ID
router.delete("/:id", async (req, res) => {
    try {
        const transcript = await Transcript.findByIdAndUpdate(req.params.id)
        res.status(200).json(transcript)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router