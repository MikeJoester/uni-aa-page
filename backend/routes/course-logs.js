const router = require('express').Router()
let Courselog = require('../models/course-log.model')
let Student = require('../models/student.model')
let Course = require('../models/course.model')

// GET ALL COURSE LOGS
// router.get("/", async (req, res) => {
//     try {
//         const courselogs = await Courselog.find()
//         res.status(200).json(courselogs)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// GET COURSE LOGS BY STUDENT ID
// /courselogs?studentId=....
router.get("/", async (req, res) => {
    const studentId = req.query.student_id
    try {
        let logs;
        if (studentId) {
            logs = await Courselog
                .find()
                .populate({
                    path: "studentId", 
                    match: {
                        student_id: studentId
                    },
                    select: "student_id",
                })
                .exec(function(error, students) {
                    res.status(200).json(students)
                })
            //res.status(200).json(logs)
        } else {
            logs = await Courselog.find().populate("studentId", "student_id")
            res.status(200).json(logs)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    const newLog = new Courselog(req.body)
    try {
        const savedLog = await newLog.save()
        res.status(200).json(savedLog)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router