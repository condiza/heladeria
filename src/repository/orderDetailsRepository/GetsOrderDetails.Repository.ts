import { connect } from "../../config/database";

export async function Gets() {
    try {
        const conn = await connect();
        const result = await conn.query('SELECT * FROM Datos_Oders_Detail;');
        return result[0];
    } catch (error) {
        console.error('Error bringing order details:', error);
        throw error; 
    }
}
