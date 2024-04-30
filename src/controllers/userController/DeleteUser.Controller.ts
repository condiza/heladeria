import { Request,Response } from "express";
import { Delete } from "../../repository/userRepository/DeleteUser.Repository";

export async function deleteUser(req: Request, res:Response) {
    try {
        const id = req.params.userId;
        await Delete(id)
        return res.status(200).json({
            menssage: 'The user has been removed correctly',
        });
    } catch (error) {
        return res.status(500).json({
            error:'Server internal error'
        });
    }
};