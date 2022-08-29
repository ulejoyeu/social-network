import express from 'express';
import { checkUser } from '../middlewares/authMiddleware.js';
import auth from './authRoutes.js';
import posts from './postsRoutes.js';

const router = express.Router();

router.use('*', checkUser);
router.use("/auth", auth);
router.use('/posts', posts);

export default router;