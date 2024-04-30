import { Response,Request } from "express";
import { Delete } from "../../repository/ordersRepository/DeleteOrder.Repository";

export async function deleteOrder(req: Request,res:Response): Promise<Response> {
    try {
        const id = req.params.ordersId;
        await Delete(id)
        return res.status(200).json({
            menssage:'The Order has been removed correctly'
        });
    } catch (error) {
        return res.status(500).json({
            error:'Server internal error'
        })
    }   
};