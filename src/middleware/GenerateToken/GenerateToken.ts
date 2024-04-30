import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function createToken(email: string) {
    try {
        const secret = process.env.SECRET ?? 'SECRET'; 
        const payload = { email };
        return jwt.sign(payload, secret, { expiresIn: '24h' });
    } catch (error) {
        throw new Error('Error create token');
    }
}
