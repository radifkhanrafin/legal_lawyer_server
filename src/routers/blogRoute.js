const express = require('express');
const { getAllBlogs, getBlogById, newBlog, increaseView } = require('../controllers/blogController');

const blogRoute = express.Router()


blogRoute.post('/', newBlog)
//  get chat info by user id
blogRoute.get('/:id', getBlogById)

//  get all chat 
blogRoute.get('/', getAllBlogs)

blogRoute.patch('/increaseView/:id', increaseView)




module.exports = blogRoute;