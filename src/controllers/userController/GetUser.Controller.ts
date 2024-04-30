import { Request,Response } from "express";
import { Get } from "../../repository/userRepository/GetUser.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.helper";


export async function getUser(req: Request, res: Response): Promise<Response> {
    try {
        const id = req.params.userId;
        const getUser = await Get(id);
        await Existences(getUser)
        return res.status(200).json(getUser);
    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }
};