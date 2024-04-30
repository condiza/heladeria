import { Response, Request } from "express";
import { Delete } from "../../repository/orderDetailsRepository/DeleteOrderDetails.Repository";
import { validateToken } from "../../middleware/ValidateToken/ValidateToken";


export async function deleteOrderDetails(req: Request, res: Response) {
    try {
        const accessToken = req.headers['authorization'];
        // Validar el token
        await validateToken(accessToken);
        const id = req.params.orderdId; 
        const result = await Delete(id);
        return res.status(200).json(result);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else{
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
};