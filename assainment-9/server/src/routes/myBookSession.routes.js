import { Router } from 'express';
import { authMiddlewere } from '../middlewere/authMiddlewere.js';
import { createBookedSession } from '../controllers/booke-sessions/createBookedSession.controllers.js';
import { getMyBookedSession } from '../controllers/booke-sessions/getMyBookedSession.controllers.js';
import { cancelBookedSession } from '../controllers/booke-sessions/cancelBookedSession.controller.js';

const myBookSessionRouter = Router();

myBookSessionRouter.post('/create', authMiddlewere, createBookedSession);
myBookSessionRouter.get('/book-sessions', authMiddlewere, getMyBookedSession);
myBookSessionRouter.patch('/cancel-session/:id', authMiddlewere, cancelBookedSession);

export default myBookSessionRouter;
