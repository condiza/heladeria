import { connect } from "../../config/database";

export async function Delete(id:string) {
    try {
        const conn = await connect();
        return await conn.query('DELETE FROM Users WHERE Id_User = ?',[id]);
    } catch (error) {
        console.error('Error delete user',error)
    }
}