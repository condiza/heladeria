import { connect } from "../../config/database";
import { Flavor } from "../../interface/flavors.interface";

export async function Update(id:string,updateFlavor:Flavor): Promise<{menssage:string}> {
    try {
        const conn = await connect();
        await conn.query('UPDATE Flavors SET ? WHERE  Id_Flavor = ?',[updateFlavor,id]);
        return { menssage:'Flavor update' };
    } catch (error) {
        console.error('Error update flavor', error);
        throw new Error('Error update flavor');
    }
};