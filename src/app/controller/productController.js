import * as productService from '../services/productService';

export async function createProduct(req, res, next) {
    try {
        await productService.createProduct(req.body, req.auth.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function updateProduct(req, res, next) {
    try {
        await productService.updateProduct(req.body, req.auth.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}
