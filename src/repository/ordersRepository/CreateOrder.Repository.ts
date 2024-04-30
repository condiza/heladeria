import { connect } from "../../config/database";
import { Order } from "../../interface/orders.interface";

export async function Create(newOrder:Order) {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO Orders SET ?',[newOrder]);
    } catch (error) {
        console.error('Error when entering a new order',error);
    }
}