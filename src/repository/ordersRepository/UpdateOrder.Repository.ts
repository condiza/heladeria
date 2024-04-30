import { connect } from "../../config/database";
import { Order } from "../../interface/orders.interface";

export async function Update(id:string,updateOrder:Order) {
    try {
        const conn = await connect();
        await conn.query('UPDATE Orders SET ? WHERE  Id_Order = ?',[updateOrder,id]);
        return { menssage:'Order update' };
    } catch (error) {
        console.error('Error update order', error);
        throw new Error('Error update order');
    }
    
}