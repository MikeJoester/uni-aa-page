const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    class_name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    major: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;