import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createTutor } from '../controllers/tutor/createTutor.controller.js';

const tutorRouter = Router();

tutorRouter.post('/create', authMiddlewere, createTutor);

export default tutorRouter;
