import { connect } from "../../config/database";

export async function Id(email_U:string) {
    const conn = await connect();
    const result = await conn.query('SELECT Id_User FROM Users WHERE email_U = ?',[email_U]);
    return result[0];
}