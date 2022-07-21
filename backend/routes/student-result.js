const router = require('express').Router()
let Result = require('../models/student-result.model')


// GET COURSE BY ID
router.get("/:id", async (req, res) => {
    try {
        const result = await Result.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

// ADD STUDENT RESULT
router.post("/", async (req, res) => {
    const newResult = new Result(req.body)
    try {
        const savedResult = await newResult.save()
        res.status(200).json(savedResult)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE STUDENT RESULT
router.patch("/:id", async (req, res) => {
    try {
        const result = await Result.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE COURSE
router.delete("/:id", async (req, res) => {
    try {
        const result = await Result.findByIdAndDelete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router