const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    course_name: {
        type: String,
        unique: true,
        require: true
    },
    lecturer_name: {
        type: String,
        require: true
    },
    post_date: {
        type: String,
        default: Date.now,
    },
    deadline: {
        type: String,
        require: true,
    },
    form_link: {
        type: String,
        require: true
    },
    form_status: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;