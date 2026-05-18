import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';

const tutorRouter = Router();

tutorRouter.post('/create', authMiddlewere, (req, res) => {});

export default tutorRouter;
