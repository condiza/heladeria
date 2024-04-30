import { Response, Request } from "express";
import { Update } from "../../repository/orderDetailsRepository/UpdateOrderDetails.Repository";
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";


export async function updateOrderDetails(req: Request, res: Response) {
    try {
        const accessToken = req.headers['authorization'];
        // Validar el token
        await validateToken(accessToken);
        const id = req.params.orderdId;  
        const updateOrderDetails = req.body;
        const result = await Update(id,updateOrderDetails)
        return res.status(200).json(result);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else{
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
};