import { connect } from "../../config/database";

export async function Delete(id:string) {
    try {
        const conn = await connect();
        await conn.query('DELETE FROM Topping WHERE  Id_Topping = ?',[id]);
    } catch (error) {
        
    }
}