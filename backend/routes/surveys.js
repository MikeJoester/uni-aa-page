const router = require('express').Router()
let Survey = require('../models/survey.model')

// GET ALL SURVEYS
router.get("/", async (req, res) => {
    try {
        const surveys = await Survey.find()
        res.status(200).json(surveys)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET SURVEY BY ID
router.get("/:id", async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id)
        res.status(200).json(survey)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE SURVEY
router.post("/", async (req, res) => {
    const newSurvey = new Survey(req.body)
    try {
        const savedSurvey = await newSurvey.save()
        res.status(200).json(savedSurvey)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE SURVEY
router.patch("/:id", async (req, res) => {
    try {
        const survey = await Survey.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(survey)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE SURVEY
router.delete("/:id", async (req, res) => {
    try {
        const survey = await Survey.findByIdAndDelete(req.params.id)
        res.status(200).json(survey)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router