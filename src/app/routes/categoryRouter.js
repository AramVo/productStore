import express from 'express';

import { validateCategory } from '../validators/validateCategory';
import { createCategory, updateCategory, deleteCategory } from '../controller/categoryController';
import { authMiddlware } from '../middlwares/authMiddlware';

export const categoryRouter = express.Router();

categoryRouter.post('/', authMiddlware('seller'), validateCategory, createCategory);
categoryRouter.put('/:id', authMiddlware('seller'), validateCategory, updateCategory);
categoryRouter.delete('/:id', authMiddlware('seller'), deleteCategory);
