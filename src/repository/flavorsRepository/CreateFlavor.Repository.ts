import { connect } from "../../config/database";
import { Flavor } from "../../interface/flavors.interface";

export async function Create(newFlavor:Flavor[]) {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO Flavors SET ?',[newFlavor]);
    } catch (error) {
        console.error('Error when entering a new flavor',error);
    }
}