import yup from 'yup';

const loginDataSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required('Password is required'),
});

export function validateLoginData(req, res, next) {
    if (loginDataSchema.isValidSync(req.body)) {
        return next();
    }

    next(new Error('Invalid data'));
}
