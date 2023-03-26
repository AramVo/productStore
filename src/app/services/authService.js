import jwt from 'jsonwebtoken';

import { User } from '../../db/models'

export function createUser(data) {
    return User.create(data);
}

export async function login(data) {
    const user = await User.findOne({
        where: {
            email: data.email
        }
    });

    if (!user) {
        throw new Error('User not found');
    }

    const isCorrectPass = await user.comparePasswords(data.password)

    if (!isCorrectPass) {
        throw new Error('Invalid Password');
    }

    let token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1d' }
    );

    return token;
}
