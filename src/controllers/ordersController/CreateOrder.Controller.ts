import { Response,Request } from "express";
import { Create } from "../../repository/ordersRepository/CreateOrder.Repository";

export async function createOrder(req: Request, res: Response) {
    try {
        const newOrder = req.body;
        await Create(newOrder);
        return res.status(200).json({
            menssage: 'Successfully created order'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Server internal error'
        })
    }
};