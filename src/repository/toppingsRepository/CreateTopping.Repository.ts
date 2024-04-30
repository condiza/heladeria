import { connect } from "../../config/database";
import { Topping } from "../../interface/toppings.interface";

export async function Create(newTopping:Topping) {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO Topping SET ?',[newTopping]);
    } catch (error) {
        console.error('error when creating topping',error);
    }
}