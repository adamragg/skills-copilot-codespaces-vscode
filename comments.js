// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const path = require('path');

// Import models
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');

// Import functions
const { isLoggedIn } = require('../middleware');

// Create a comment
router.post('/posts/:id/comments', isLoggedIn, async (req, res) => {
    try {
        // Get post
        const post = await Post.findById(req.params.id);
        // Create comment
        const comment = new Comment({
            ...req.body,