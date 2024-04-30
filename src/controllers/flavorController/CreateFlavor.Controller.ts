import {Request,Response} from'express'
import { Create } from '../../repository/flavorsRepository/CreateFlavor.Repository';

export async function createFlavor(req: Request, res: Response) {
    try {
        const newFlavor = req.body;
        await Create(newFlavor);
        return res.status(200).json({
            menssage: 'Successfully created flavor'
        });
    } catch (error) {
        return res.status(500).json({
          error:'Internal Server Error'
        })
    }
    };