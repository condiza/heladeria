import { connect } from "../../config/database";
import { Order } from "../../interface/orders.interface";

export async function Update(id:string,orderUpdate:Order): Promise<{ message : string}> {
    try {
        const conn = await connect();
        await conn.query('UPDATE Order_Details SET ? WHERE Id_Order_Details = ?',[orderUpdate,id]);
        await conn.query(` 
        UPDATE Order_Details AS od
       SET Total = (SELECT Amount_Order FROM Orders WHERE Id_Order = od.Id_Order) * 
                   (SELECT Price_Flavor FROM Flavors WHERE Id_Flavor = od.Id_Flavor) + 
                   (SELECT Price_Topping FROM Topping WHERE Id_Topping = od.Id_Topping)`
               );
        return { message: 'Updated product details'}
    } catch (error) {
        throw new Error('Error updating order detail');
    }

}