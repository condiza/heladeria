import { connect } from "../../config/database";

export async function Gets() {
    try {
    const conn = await connect();
    const result =  await conn.query('SELECT * FROM Orders');
    return result[0]
    } catch (error) {
        console.error('Error finding orders',error)
    }
}