import { connect } from "../../config/database";
import bcrypt from 'bcrypt';

export async function newPassword(newPassword_U: string, id: number): Promise<void> {
    try {
        // Hash de la nueva contraseña
        const hashedNewPassword = await bcrypt.hash(newPassword_U, 10);
        // Actualizar la contraseña en la base de datos
        const conn = await connect();
        await conn.query('UPDATE Users SET password_U = ? WHERE Id_User = ?', [hashedNewPassword, id]);
        console.log('segundo',id);
    } catch (error) {
        // Manejo de errores
        throw new Error('Error changing password');
    }
}
