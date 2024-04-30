import { Request,Response } from "express";
import { Update } from "../../repository/userRepository/UpdateUser.Repository";

export async function updateUser(req: Request, res: Response) {
    try {
        const id = req.params.userId;
        const updateUser = req.body;
        await Update(id,updateUser);
        return res.status(200).json({
            menssage:'User update',
        });
    } catch (error) {
        return res.status(500).json({
            error:'Server imternal error'
        })
    }
};