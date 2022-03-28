const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


// Get all the blogs
router.get('/blogs', async(req, res) => {
    
    const blogs = await Blog.find({});

    res.render('blogs/index',{blogs});
});

// Get the new from to create new blog
router.get('/blogs/new', (req, res) => {
    res.render('blogs/new')
});

// create a new blog with the given payload
router.post('/blogs', async (req, res) => {
    
    const newBlog = {
        ...req.body
    }

    await Blog.create(newBlog);

    res.redirect('/blogs');
});

// Show a particular blog
router.get('/blogs/:id', async (req, res) => {
    
    const { id } = req.params;

    const blog = await Blog.findById(id);

    res.render('blogs/show', { blog });
});


// getting the edit form prefilled with the data
router.get('/blogs/:id/edit', async (req, res) => {
    
    const { id } = req.params;

    const blog = await Blog.findById(id);

    res.render('blogs/edit', { blog });
});


// updating the blog with the given payload
router.patch('/blogs/:id', async (req, res) => {
    
    const updatedBlog = req.body;
    const { id } = req.params;

    await Blog.findByIdAndUpdate(id, updatedBlog);


    res.redirect(`/blogs/${id}`);
});

router.delete('/blogs/:id', async (req, res) => {

    const { id } = req.params;
    
    await Blog.findOneAndDelete(id);

    res.redirect('/blogs');
})


module.exports = router;