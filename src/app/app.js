import express from 'express';
import bodyParser from 'body-parser';

import { authRouter } from './routes/authRouter';
import { productRouter } from './routes/productRouter';
import { categoryRouter } from './routes/categoryRouter';
// import { tagRouter } from './routes/tagtRouter';

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use('/products', productRouter);
// app.use('/tags', tagRouter);
app.use('/categories', categoryRouter);

app.use((err, req, res, next) => {
    res.status(500).send(err?.message || 'Something went wrong')
});
