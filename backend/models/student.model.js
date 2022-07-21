const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_id: {
        type: Number,
        unique: true,
        require: true
    },
    full_name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    birth_date: {
        type: Date,
        require: true,
    },
    birth_place: {
        type: String,
        require: true
    },
    gender: {
        type: Boolean,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    googleID: {
        type: String,
        unique: true,
        require: false
    },
    phone: {
        type: String,
        require: true
    },
    major: {
        type: Schema.Types.ObjectId,
        ref: 'Major',
        require: true
    },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    credit: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;