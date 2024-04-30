import { connect } from "../../config/database";

export async function Get(id:string) {
    try {
        const conn = await connect();
        const result = await conn.query('SELECT * FROM Users WHERE Id_User = ?',[id]);
        return result[0];
    } catch (error) {
        console.error('Error finding topping',error);
    }
}