import express from 'express';
import cors from 'cors';
import { auth } from './lib/auth.js';
import { toNodeHandler } from 'better-auth/node';
import dotenv from 'dotenv';
import { ENV } from './lib/ENV.js';
import tutorRouter from './routes/tutor.routes.js';
dotenv.config();

const port = process.env.PORT || 7000;

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());

// better-auth
app.all('/api/auth/{*any}', toNodeHandler(auth));

// server routes / end points
app.use('/api/tutor', tutorRouter);


// test
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});


app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
