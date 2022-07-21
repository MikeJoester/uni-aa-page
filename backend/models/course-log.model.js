const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courselogSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true,
});

const Courselog = mongoose.model('Courselog', courselogSchema);

module.exports = Courselog;