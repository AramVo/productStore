import yup from 'yup';

const tagSchema = yup.object().shape({
    name: yup.string().required(),
});

export function validateTag(req, res, next) {
    if (tagSchema.isValidSync(req.body)) {
        return next();
    }

    next(new Error('Invalid data'));
}
