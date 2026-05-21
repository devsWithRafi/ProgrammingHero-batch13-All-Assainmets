import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ENV } from './lib/ENV.js';
import tutorRouter from './routes/tutor.routes.js';
import { authMiddlewere } from './middlewere/authMiddlewere.js';
import myBookSessionRouter from './routes/myBookSession.routes.js';
import { connectDB } from './config/db.js';
// import { dbConnect } from './middlewere/dbConnect.js';
dotenv.config();

const port = process.env.PORT || 7000;

const app = express();

// connect database
// app.use(dbConnect);
await connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());

// server routes / end points
app.use('/api/tutor', tutorRouter);
app.use('/api/booking', myBookSessionRouter);

// test
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is OK' });
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});

export default app;
