import * as categoryService from '../services/categoryService';

export async function createCategory(req, res, next) {
    try {
        await categoryService.createCategory(req.body);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function updateCategory(req, res, next) {
    try {
        await categoryService.updateCategory(req.body, req.params.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function deleteCategory(req, res, next) {
    try {
        await categoryService.deleteCategory(req.params.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}
