import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createBookSession } from '../controllers/booke-sessions/createBookSession.controllers.js';
import { getMyBookSession } from '../controllers/booke-sessions/getMyBookSession.controllers.js';

const myBookSessionRouter = Router();

myBookSessionRouter.post('/create', authMiddlewere, createBookSession);
myBookSessionRouter.get('/get-my-book-session', authMiddlewere, getMyBookSession);

export default myBookSessionRouter;
