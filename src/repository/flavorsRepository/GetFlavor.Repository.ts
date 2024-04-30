import { connect } from "../../config/database";

export async function Get(id:string) {
try {
    const conn = await connect();
    const getFlavor = await conn.query('SELECT * FROM Flavors WHERE  Id_Flavor = ?',[id])
    return getFlavor[0];
} catch (error) {
    console.error('Error finding flavor',error);
    throw new Error('Error finding flavor');
}
}