import express from 'express';
import { loginUser, registerUser, updateUser, logoutUser, userInfo } from '../controllers/authController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/userinfo', userInfo);
router.post('/register', registerUser);
router.post('/update', requireAuth, updateUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;