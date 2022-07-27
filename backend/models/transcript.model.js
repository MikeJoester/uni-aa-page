const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transcriptSchema = new Schema({
    student_id: {
        type: Number,
        unique: true,
        require: true
    },
    student_email: {
        type: String,
        require: true,
        unique: true
    },
    grades: [{
        course: {
            type: String,
        },
        grade: {
            type: String,
        }
    }]
}, {
    timestamps: true,
});

const Transcript = mongoose.model('Transcript', transcriptSchema);

module.exports = Transcript;