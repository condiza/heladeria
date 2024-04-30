import { Response,Request } from "express";
import { Create } from "../../repository/toppingsRepository/CreateTopping.Repository";

export async function createTopping(req: Request, res: Response) {
    try {
        const newTopping = req.body;
        await Create(newTopping);
        return res.json({
            menssage: 'Successfully created toppings'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Server internal error'
        })
    }
};