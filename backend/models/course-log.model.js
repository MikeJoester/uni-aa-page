const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courselogSchema = new Schema({
    students: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true,
});

const Courselog = mongoose.model('Courselog', courselogSchema);

module.exports = Courselog;