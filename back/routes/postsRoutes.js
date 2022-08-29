import express from 'express';
import { createPost, getPostImage, getUserPosts } from '../controllers/postsController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', requireAuth, createPost);
router.get('/findByUser/:username', requireAuth, getUserPosts);
router.get('/getPostImage/:imageName', requireAuth, getPostImage);

export default router;