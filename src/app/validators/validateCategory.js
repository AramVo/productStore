import yup from 'yup';

const categorytSchema = yup.object().shape({
    name: yup.string().required(),
    pId: yup.number().nullable(),
});

export function validateCategory(req, res, next) {
    if (categorytSchema.isValidSync(req.body)) {
        return next();
    }

    next(new Error('Invalid data'));
}
