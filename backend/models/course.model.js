const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    course_code: {
        type: String,
        unique: true,
        require: true
    },
    course_name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    credit: {
        type: Number,
        require: true
    },
    optional: {
        type: Boolean,
        require: true
    },
    semester: {
        type: String,
        require: true
    },
    major: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;