const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    students: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    AT: {
        type: Number,
    },
    Pr: {
        type: Number,
    },
    ME: {
        type: Number,
    },
    FE: {
        type: Number,
    },
    T10: {
        type: Number,
    },
}, {
    timestamps: true,
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;