import { connect } from "../../config/database";

export async function Gets(){
   try {
        const conn = await connect();
        const flavors = await conn.query('SELECT * FROM Flavors');
        return flavors[0];
   } catch (error) {
    console.error('Error bringing flavors', error);
    throw new Error('Error bringing flavors');
   }
};