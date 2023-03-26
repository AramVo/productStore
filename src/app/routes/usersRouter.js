import express from 'express';

import { validateUser } from '../validators/validateUser';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Users')
});

userRouter.get('/:id', (req, res) => {
    res.send(`user with id: ${req.params.id}`)
});

userRouter.put('/:id', (req, res) => {
    res.send(`user with id: ${req.params.id} updated`)
});

userRouter.delete('/:id', (req, res) => {
    res.send(`user with id: ${req.params.id} deleted`)
});
