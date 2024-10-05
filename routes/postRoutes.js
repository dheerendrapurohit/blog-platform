const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
const postRoutes = require('./routes/postRoutes');
app.use('/api', postRoutes);
const { verifyJWT } = require('../middleware/authMiddleware');
router.post('/posts', verifyJWT, postController.createPost);

module.exports = router;
