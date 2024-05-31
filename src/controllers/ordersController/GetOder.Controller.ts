import { Response,Request } from "express";
import { Get } from "../../repository/ordersRepository/GetOrder.Repository";
import { Existences } from '../../helpers/validateExisences/Existences.helper';


export async function getOrder (req:Request,res:Response): Promise<Response>{
    try {
        const id = req.params.ordersId;
        const getOrder = await Get(id);
        await Existences(getOrder);
        return res.status(200).json(getOrder);
    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }    
};