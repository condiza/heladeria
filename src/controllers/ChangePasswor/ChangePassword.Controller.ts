import { Response, Request } from "express";
import { ValidateEmail } from "../../repository/userRepository/ValidateEmail.Repository";
import { Auth } from "../../repository/authRepository/Auth.Repositosy";
import bcrypt from 'bcrypt';
import { newPassword } from "../../repository/ChangePassword/ChangePassword.Repository";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


import { JwtPayload } from 'jsonwebtoken';

dotenv.config();

export async function changePassword(req: Request, res: Response): Promise<Response> {
    try {
        const { email_U, password_U, newPassword_U } = req.body;
        // Verificar el token
        const tokenCookie = req.cookies.token1;
        const decoded = jwt.verify(tokenCookie, process.env.SECRET ?? 'SECRET') as JwtPayload;
        // Obtener información del usuario
        const result: any = await Auth(email_U);
        if (result[0].length === 0) {
            return res.status(500).json({ error: 'Username or password incorrect' });
        }
        // Verificar la contraseña actual 
        const isPasswordValid = await bcrypt.compare(password_U, result[0][0].password_U);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Username or password incorrect' });
        }
        // Cambiar la contraseña
        await newPassword(newPassword_U, decoded.id.Id_User);
        return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error:any) {
        // Manejo de errores
        console.error('Error changing password:', error.message);
        return res.status(500).json({ message: 'Server internal error' });
    }
}
