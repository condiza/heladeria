import { Response, Request } from "express";
import { Create } from "../../repository/orderDetailsRepository/CreateOrderDetails.Repository";
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";


export async function createOrderDetails(req: Request, res: Response) {
    try {
        const accessToken = req.headers['authorization'];
                // Validar el token
                await validateToken(accessToken);
        const newOrderDetails = req.body;
        await Create(newOrderDetails);
        return res.json({
            message: 'Successfully created order details',
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else{
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
};