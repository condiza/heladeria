import { Request,Response } from "express";
import { Gets } from "../../repository/userRepository/GetUsers.Repository";
import { Existences } from "../../helpers/validateExisences/Existences.helper";

export async function getUsers(req: Request, res: Response): Promise<Response> {
    try {
        const getUsers = await Gets();
        await Existences(getUsers)
        return res.status(200).json(getUsers);
    } catch (error: any) {
        return res.status(500).json({
            error: error.message
        })
    }
};