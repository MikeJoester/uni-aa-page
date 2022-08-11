const express = require('express')
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const multer = require('multer')
require("./config/passport")(passport)
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images")
    },
    filename : (req, file, cb) => {
        cb(null, req.body.name)
    },
});

const upload = multer({storage : storage})
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image has been uploaded");
})

app.get('/', (req, res) => {
    res.send("Backend is running")
})

// route goes here
const blogsRouter = require('./routes/blogs')
const classesRouter = require('./routes/classes')
const courselogsRouter = require('./routes/course-logs')
const coursesRouter = require('./routes/courses')
const majorsRouter = require('./routes/majors')
const studentsRouter = require('./routes/students')
const resultsRouter = require('./routes/student-result')
const authRouter = require('./routes/auth')
const classList = require('./scripts/classList')
const updateMajorCourse = require('./scripts/updateMajorCourse')
const transcriptRouter = require('./routes/transcript')
const adminLoginRouter = require('./routes/admin-auth')
const surveyRouter = require('./routes/surveys')

app.use("/blogs", blogsRouter)
app.use("/classes", classesRouter)
app.use("/courselogs", courselogsRouter)
app.use("/courses", coursesRouter)
app.use("/majors", majorsRouter)
app.use("/students", studentsRouter)
app.use("/results", resultsRouter)
app.use("/auth", authRouter)
app.use("/classlist", classList)
app.use("/umj", updateMajorCourse)
app.use("/transcript", transcriptRouter)
app.use("/adminlogin", adminLoginRouter)
app.use("/surveys", surveyRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})