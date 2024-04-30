import { Response,Request } from "express";
import { Update } from "../../repository/ordersRepository/UpdateOrder.Repository";

export async function updateOrder(req:Request,res:Response) {
    try {
        const id = req.params.ordersId;
        const updateOrder = req.body;
        await Update(id,updateOrder)
        return res.status(200).json({
            menssage:'Order update'
        });
    } catch (error) {
        return res.status(500).json({
            error:'Server internal error'
        })
    }
};



