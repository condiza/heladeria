import { Response,Request } from "express";
import { Get } from "../../repository/toppingsRepository/GetTopping.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.Helper";

export async function getTopping (req:Request,res:Response): Promise<Response>{
    try {
        const id = req.params.toppingId;
        const getTopping = await Get(id);
        await Existences(getTopping);
        return res.status(200).json(getTopping);

    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }
};