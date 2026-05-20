import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createBookSession } from '../controllers/booke-sessions/createBookSession.controllers.js';

const myBookSessionRouter = Router();

myBookSessionRouter.post('/create', authMiddlewere, createBookSession);

export default myBookSessionRouter;
