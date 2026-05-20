import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createTutor } from '../controllers/tutor/createTutor.controller.js';
import { getAllTutors } from '../controllers/tutor/getAllTutors.controllers.js';
import { getOneTutor } from '../controllers/tutor/getOneTutor.controllers.js';
import { getMyTutor } from '../controllers/tutor/getMyTutor.controllers.js';
import { updateTutorData } from '../controllers/tutor/updateTutorData.controllers.js';
import { deleteTutor } from '../controllers/tutor/deleteTutor.controllers.js';

const tutorRouter = Router();

tutorRouter.post('/create', authMiddlewere, createTutor);
tutorRouter.get('/get-tutors', getAllTutors);
tutorRouter.get('/get-tutors/:id', authMiddlewere, getOneTutor);
tutorRouter.get('/my-tutors', authMiddlewere, getMyTutor);
tutorRouter.put('/update-tutor/:id', authMiddlewere, updateTutorData);
tutorRouter.delete('/delete-tutor/:id', authMiddlewere, deleteTutor);

export default tutorRouter;
