import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function createToken(id: any) {
    try {
        const secret = process.env.SECRET ?? 'SECRET'; 
        const payload = { id };
        return jwt.sign(payload, secret, { expiresIn: '10m' });
    } catch (error) {
        throw new Error('Error create token');
    }
}
