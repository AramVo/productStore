import { expressjwt } from 'express-jwt';

export function authMiddlware(role) {
    return (req, res, next) => {
        expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] })(
            req, res, () => {
                if (!role || req.auth.role === role) {
                    return next()
                }

                next(new Error('Invalid Role'))
            }
        )
    }
}