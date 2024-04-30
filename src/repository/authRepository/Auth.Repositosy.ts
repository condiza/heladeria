import { connect } from "../../config/database";

export async function Auth(email_U:string) {
    try {
        const conn = await connect();
        const result = await conn.query('SELECT password_U FROM Users WHERE email_U = ?',[email_U]);
        return result;
    } catch (error) {
        console.error('Incorrect username or password ',error)
        throw error
    }
}