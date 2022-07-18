const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    class_code: {
        type: String,
        unique: true,
        require: true
    },
    class_name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, {
    timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;