const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    full_name: {
        type: String,
        require: true,
        minlength: 3
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;