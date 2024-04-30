import { connect } from "../../config/database";
import { Topping } from "../../interface/toppings.interface";

export async function Update(id:string,updateTopping:Topping) {
    try {
        const conn = await connect();
        await conn.query('UPDATE Topping SET ? WHERE  Id_Topping = ?',[updateTopping,id]);
        return { message:'Topping update'}
    } catch (error) {
        console.error('Error update topping', error);
    }
}