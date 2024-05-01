import { Response, Request } from "express";
import { Get } from "../../repository/orderDetailsRepository/GetOrderDetails.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.Helper";
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";



export async function getOrderDetails(req: Request, res: Response): Promise<Response> {
    try {
        //traemos el token de las cookies
        const tokenCookie = req.cookies.token1;
        console.log(tokenCookie);
        // Validar el token
        await validateToken(tokenCookie);
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