import { Response, Request } from "express";
import { Get } from "../../repository/orderDetailsRepository/GetOrderDetails.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.helper";
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";



export async function getOrderDetails(req: Request, res: Response): Promise<Response> {
    try {
        const accessToken = req.headers['authorization'];
        // Validar el token
        await validateToken(accessToken);
        const id = req.params.orderdId; 
        const getOrderDetails = await Get(id);
        await Existences(getOrderDetails);
        return res.json(getOrderDetails);

    }catch (error:any) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else{
            return res.status(500).json({
                error:error.message
            });
        }
    }
};