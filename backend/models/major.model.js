const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const majorSchema = new Schema({
    major_code: {
        type: String,
        unique: true,
        require: true
    },
    major_name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, {
    timestamps: true,
});

const Major = mongoose.model('Major', majorSchema);

module.exports = Major;