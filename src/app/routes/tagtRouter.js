import express from 'express';

import { validateTag } from '../validators/validateTag';
import { createTag, updateTag, deleteTag } from '../controller/tagController';
import { authMiddlware } from '../middlwares/authMiddlware';

export const tagRouter = express.Router();

tagRouter.post('/', authMiddlware('seller'), validateTag, createTag);
tagRouter.put('/:id', authMiddlware('seller'), validateTag, updateTag);
tagRouter.delete('/:id', authMiddlware('seller'), deleteTag);
