import { Response,Request } from "express";
import { Gets } from "../../repository/toppingsRepository/GetToppings.Repository";
import { Existences } from '../../helpers/validateExisences/Existences.helper';

export async function getToppings(req:Request, res:Response): Promise <Response> {
    try {
        const topping = await Gets();
        await Existences(topping); 
        return res.json(topping);
    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }
};