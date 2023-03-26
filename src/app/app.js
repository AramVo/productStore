import express from 'express';
import bodyParser from 'body-parser';

import { authMiddlware } from './middlwares/authMiddlware';
import { userRouter } from './routes/usersRouter';
import { authRouter } from './routes/authRouter';

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use(authMiddlware('seller'))
app.use('/users', userRouter);
// app.use('/tags');
// app.use('/products');
// app.use('/categories');

app.use((err, req, res, next) => {
    res.status(500).send(err?.message || 'Something went wrong')
});
