import { connect } from "../../config/database";

export async function Delete(id:string) {
    try {
        const conn = await connect();
        return await conn.query('DELETE FROM Orders WHERE  Id_Order = ?',[id])
    } catch (error) {
        console.error('Error removing order:', error);
        throw new Error('An error occurred while deleting the order.');
    }
}