const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_title: {
        type: String,
        require: true,
        minlength: 3
    },
    blog_description: {
        type: String,
        require: true,
        minlength: 3
    },
    image: {
        type: String
    },
    category: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;