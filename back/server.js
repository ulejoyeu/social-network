import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});
