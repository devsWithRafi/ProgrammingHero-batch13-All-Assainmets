import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createTutor } from '../controllers/tutor/createTutor.controller.js';
import { getAllTutors } from '../controllers/tutor/getAllTutors.controllers.js';

const tutorRouter = Router();

tutorRouter.post('/create', authMiddlewere, createTutor);
tutorRouter.get('/get-tutors', getAllTutors);
tutorRouter.get('/get-tutors/:id', authMiddlewere, getAllTutors);

export default tutorRouter;
