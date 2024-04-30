import {Request,Response} from'express'
import { Update } from '../../repository/flavorsRepository/UpdateFlavor.Repository';

export async function updateFlavor(req:Request,res:Response) {
   try {
    const id = req.params.flavorId;
    const updateFlavor = req.body;
    const result = await Update(id,updateFlavor);
    return res.status(200).json(result);
   } catch (error) {
    return res.status(500).json({
       error: 'Internal Server Error'
      });
   }
};
