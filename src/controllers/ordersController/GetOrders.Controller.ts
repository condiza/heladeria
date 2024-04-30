import { Response,Request } from "express";
import { Gets } from "../../repository/ordersRepository/GetsOrders.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.helper";

export async function getOrders(req:Request, res:Response): Promise <Response> {
    try {
        const order = await Gets();
        await Existences(order);
       return res.status(200).json(order);
    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }
};