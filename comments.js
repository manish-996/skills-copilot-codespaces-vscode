// Create web server 
// 1. Import express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// 1. Create a route for create a comment
//    api/comments
router.post('/', 
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('post', 'Post is required').not().isEmpty()
    ],
    commentController.createComment
);

// 2. Create a route for get all comments
//    api/comments
router.get('/', 
    auth,
    commentController.getComments
);

// 3. Create a route for update a comment
//    api/comments/:id
router.put('/:id', 
    auth,
    commentController.updateComment
);

// 4. Create a route for delete a comment
//    api/comments/:id
router.delete('/:id', 
    auth,
    commentController.deleteComment
);

module.exports = router;
