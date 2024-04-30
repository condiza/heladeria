import { Response,Request } from "express";
import { Update } from "../../repository/toppingsRepository/UpdateTopping.Repository";

export async function updateTopping(req:Request,res:Response) {
    try {
        const id = req.params.toppingId;
        const updateTopping = req.body;
        const result = await Update(id,updateTopping)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            error:'Server internal error'
        })
    }
};



