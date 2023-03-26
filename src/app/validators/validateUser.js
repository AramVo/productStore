import yup from 'yup';

const userSchema = yup.object().shape({
    name: yup.string().required().min(1).matches(/^[A-Za-z]+$/).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required('Password is required'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    role: yup.string().oneOf(['seller', 'buyer']).required()
});

export function validateUser(req, res, next) {
    if (userSchema.isValidSync(req.body)) {
        delete req.body.passwordConfirmation
        return next();
    }

    next(new Error('Invalid data'));
}
