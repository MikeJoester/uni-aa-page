const router = require('express').Router()
let Blog = require('../models/blog.model')

// GET ALL BLOGS
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET BLOG BY ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
})

// CREATE BLOG
router.post("/", async (req, res) => {
    const newBlog = new Blog(req.body)
    try {
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE BLOG
router.patch("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE BLOG
router.delete("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router