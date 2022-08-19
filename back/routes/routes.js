import express from 'express';
import { checkUser } from '../middlewares/authMiddleware.js';
import auth from './authRoutes.js';

const router = express.Router();

router.use('*', checkUser);
router.use("/auth", auth);

// router.get("/set-cookies", (req, res) => {
//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
//     res.send('You got the cookies');
// });

// router.get('/read-cookies', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies);
//     res.json(cookies);
// });

export default router;