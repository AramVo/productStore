import express from 'express';

import { validateProduct } from '../validators/validateProduct';
import { createProduct } from '../controller/productController';
import { authMiddlware } from '../middlwares/authMiddlware';

export const productRouter = express.Router();

productRouter.post('/', authMiddlware('seller'), validateProduct, createProduct);
// productRouter.put('/login', validateLoginData, login);
