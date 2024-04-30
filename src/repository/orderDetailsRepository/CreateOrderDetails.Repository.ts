import { connect } from "../../config/database";
import { OrderDetail } from "../../interface/order_details.interface";

export async function Create(newOrderDetails:OrderDetail[]) {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO Order_Details SET ?',newOrderDetails);
        await conn.query(` 
        UPDATE Order_Details AS od
       SET Total = (SELECT Amount_Order FROM Orders WHERE Id_Order = od.Id_Order) * 
                   (SELECT Price_Flavor FROM Flavors WHERE Id_Flavor = od.Id_Flavor) + 
                   (SELECT Price_Topping FROM Topping WHERE Id_Topping = od.Id_Topping)`
               );
    } catch (error) {
        console.error('Error when creating a new flavor')
    }
}