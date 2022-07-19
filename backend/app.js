const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(console.log("Connected to MongoDB"))
.catch(err => console.log(err));


// route goes here
const blogsRouter = require('./routes/blogs');
const classesRouter = require('./routes/classes');
const courselogsRouter = require('./routes/course-logs');
const coursesRouter = require('./routes/courses');
const majorsRouter = require('./routes/majors');
const studentsRouter = require('./routes/students');

app.use("/blogs", blogsRouter);
app.use("/classes", classesRouter);
app.use("/courselogs", courselogsRouter);
app.use("/courses", coursesRouter);
app.use("/majors", majorsRouter);
app.use("/students", studentsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});