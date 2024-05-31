import { Response, Request } from "express";
import { Gets } from "../../repository/orderDetailsRepository/GetsOrderDetails.Repository";
import { Existences } from '../../helpers/validateExisences/Existences.helper';
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";


export async function getOrdersDetails(req: Request, res: Response): Promise<Response> {
    try {
        const tokenCookie = req.cookies.token1;
        // Validar el token
        await validateToken(tokenCookie);

        const ordersDetails = await Gets();
        await Existences(ordersDetails);
        return res.json(ordersDetails);
    } catch (error:any) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({
                error:error.message
            });
        }
    }
};
