import { connect } from "../../config/database";

export async function Get(id:string) {
    try {
        const conn = await connect();
        const result = await conn.execute(`SELECT * FROM Datos_Oders_Detail
        WHERE Id_Order_Details = ?`, [id]);
        return result[0];
    } catch (error) {
        console.error('Error bringing order details:', error);
    }
} 