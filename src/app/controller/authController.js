import { createUser, login as loginUser } from '../services/authService';

export async function register(req, res, next) {
    try {
        await createUser(req.body);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function login(req, res, next) {
    try {
        const token = await loginUser(req.body);                

        res.send({ success: true, token });
    } catch (err) {
        next(err)
    }
}