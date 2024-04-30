import { connect } from "../../config/database";

export async function Get(id:string) {
    try {
        const conn = await connect();
        const result = await conn.query('SELECT * FROM Orders WHERE  Id_Order = ?',[id]);
        return result[0]
    } catch (error) {
        console.error('Error finding order')
    }

}