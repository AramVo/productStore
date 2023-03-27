import yup from 'yup';

const productSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().min(0).required(),
    count: yup.number().min(0).required(),
    categoryId: yup.number().min(0).required(),
});

export function validateProduct(req, res, next) {
    if (productSchema.isValidSync(req.body)) {
        return next();
    }

    next(new Error('Invalid data'));
}
