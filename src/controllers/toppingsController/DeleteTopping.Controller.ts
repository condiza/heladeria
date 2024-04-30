import { Response,Request } from "express";
import { Delete } from "../../repository/toppingsRepository/DeleteTopping.Repository";

export async function deleteTopping(req: Request,res:Response): Promise<Response> {
    try {
        const id = req.params.toppingId;
        await Delete(id);
        return res.status(200).json({
            menssage:'The topping has been removed correctly'
        });
    } catch (error) {
        return res.status(500).json({
            menssage:'Server internal error'
        });
    }
};