import express from 'express';

import { validateUser } from '../validators/validateUser';
import { validateLoginData } from '../validators/validateLoginData';
import { register, login } from '../controller/authController';

export const authRouter = express.Router();

authRouter.post('/register', validateUser, register);
authRouter.post('/login', validateLoginData, login);
